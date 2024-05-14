
import { getThemeProps } from "@mui/system";
import Link from "next/link"

import CardInfo from "./CardInfo"

import Cards from "./Cards"

import {useContext, useState, useRef, useEffect} from "react"

import {Dialog, DialogTitle, DialogContent, Card} from "@mui/material"

import { FaTimes } from "react-icons/fa"

import { ShopContext } from "../contexts/shop-context";

import { motion, useAnimation } from "framer-motion"

import { useInView } from 'react-intersection-observer';



function CardItem(props){

  const { addToCart, cartItems } = useContext(ShopContext);


  // const {id, image, name, description} = props

  const [openPopup, setOpenPopup] = useState(false)

  // const {setOpenPopup, openPopup} = props

  const [dialogData, setDialogData] = useState(null)


  const [counter, setCounter] = useState(0);
  const [price, setPrice] = useState(0);

  
  const [cartItemAmount, setCartItemAmount] = useState(cartItems[CardInfo.id])

  // let sideRef = useRef();

  // useEffect(() => {
  //     let mouseChecker = (e) =>{
  //         if(!sideRef.current.contains(e.target)){
  //             setOpenPopup(false)
  //         }
  //     }
  //     document.addEventListener("mousedown", mouseChecker);

  //     return() => {
  //     document.removeEventListener("mousedown" , mouseChecker)
  //     }
  // })

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

    const handleAdd = () => {
  
        setCounter(counter + 1)
        setPrice(price + dialogData.price)
        // console.log(price)

    }

    const handleSubtract = () => {
        if(counter === 0)
        {
          setCounter(0)
          // setPrice(dialogData.price)
          setPrice(0)
        }
 
        else
        {
            setCounter(counter - 1)
            setPrice(price - dialogData.price)
            }
    }



    return (
      <>
      <div className = "card_holder" ref = {ref}>
          {CardInfo.map(item => (
            // return (
              <motion.li 
              className = "cards_item" 
              key={item.id} 
              animate = {controls}
              initial = "hidden"
                variants ={{
                    visible: {opacity: 1, top: "0px", position: "relative"},
                    hidden: {opacity: 0, top: "-1.25rem", position: "relative"}
                }}
                transition = {{
                    ease: "easeInOut",
                    delay: (item.id * 0.1),
                    duration: 1
                }}
              onClick = {props.onClick}>
                <button className = "cards_item_link" onClick = {() => {setDialogData(item); setOpenPopup(true);  setCartItemAmount(cartItems[item.id])}}>
                  <div className = "cont1">
                      {/* <figure className = "cards_item_picwrap" data-category = {item.name}> */}
                    <h1 className = "cards_item_wrap">View More</h1>
                    <img src={item.image} alt = "Image" className = "cards_item_img" onClick = {() => {setDialogData(item); setOpenPopup(true);  setCartItemAmount(cartItems[item.id])}}/>
                  {/* </figure> */}
                    <div className = "cards_item_info">
                      <h5 className = "cards_item_text">{item.name}</h5>
                    </div>
                  </div>
                </button>
              </motion.li>
            // );
          ))}
      </div>
    {openPopup === true ? (  
   
      // (firstState === true ? ( () => setCounter(0) && setPrice(0)) : "" ) &&

          <Dialog open = {openPopup} fullWidth maxWidth = "md" >
          <div className = "dialogue-box-container">
            <div className = "side-image">
              <img src = {dialogData.image} alt = "Image" className = "side-image"></img>
            </div>

            <div className = "side-info">
              <div className = "side-info-sub">
                <DialogTitle style = {{paddingLeft: "0px", paddingTop: "20px"}}>
                    <div className = "header-popout">
                        {dialogData.name}
                        <FaTimes className = "close" onClick = {() => {setOpenPopup(false); setCounter(0); setPrice(0);}}>
                        </FaTimes>
                    </div>
                </DialogTitle>
                
                <DialogContent style = {{display: "flex", paddingLeft: "10px", gap: "50px", flexDirection: "column"}}> 
                <div className = "dialog-content-container">

                  <div className = "cards_item_description">
                      <h5 className = "cards_item_statement">{dialogData.description}</h5>
                    </div>

                  <div className = "fooditem">

                      <div className = "fooditemsub">
                          {dialogData.name} {"..."}
                      </div>

                      <div className = "subprice-1">
                          { "C$" + dialogData.price.toFixed(2)}
                      </div>
                    
                  </div>

                  <div className = "fooditem">

                      <div className = "fooditemsub">
                          {"Total"}  {"..."}
                      </div>

                      <div className = "subprice">
                        {"C$" + price.toFixed(2)}
                      </div>

                      
                  </div>

                </div>
                  
                  <div className = "footer-dialog-container">
                    <div className = "countmain">
                        <button className = "count" onClick = {handleSubtract}>
                            -
                        </button>
                        <div className = "countsub">
                        {counter}
                        </div>
                        <button className = "count" onClick = {handleAdd}>
                            +
                        </button>
                    </div>
                    <div className = "enticement">
                        Add to your cart and order for pick up!
                    </div>
                    <div className = "addcart">
                        <button className = "cartbutton" onClick = {() => { {counter === 0 ? setOpenPopup(true) : setOpenPopup(false)}; addToCart(dialogData.id, counter); setCounter(0); setPrice(0)}}>
                          Add to cart {cartItemAmount >  0 && <> ({cartItemAmount})</>}
                          </button>
                  
                    </div>
                  </div>
                </DialogContent>
                </div>
              </div>
          </div>
      </Dialog> 
      
       ) : ""}
      </>
    );
  };



export default CardItem
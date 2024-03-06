
import { getThemeProps } from "@mui/system";
import Link from "next/link"

import CardInfo from "./CardInfo"

import Cards from "./Cards"

import {useContext, useState, useRef, useEffect} from "react"

import {Dialog, DialogTitle, DialogContent, Card} from "@mui/material"

import { FaTimes } from "react-icons/fa"
import { ShopContext } from "../contexts/shop-context";



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
      <div className = "card_holder">
          {CardInfo.map(item => (
            // return (
              <li className = "cards_item" key={item.id} onClick = {props.onClick}>
                <button className = "cards_item_link" onClick = {() => {setDialogData(item); setOpenPopup(true);  setCartItemAmount(cartItems[item.id])}}>
                  <div className = "cont1">
                      {/* <figure className = "cards_item_picwrap" data-category = {item.name}> */}
                    <h1 className = "cards_item_wrap">{item.name}</h1>
                    <img src={item.image} alt = "Image" className = "cards_item_img" onClick = {() => {setDialogData(item); setOpenPopup(true);  setCartItemAmount(cartItems[item.id])}}/>
                  {/* </figure> */}
                    <div className = "cards_item_info">
                      <h5 className = "cards_item_text">{item.description}</h5>
                    </div>
                  </div>
                </button>
              </li>
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
                <DialogTitle style = {{paddingLeft: "0px", paddingTop: "10px"}}>
                    <div className = "header-popout">
                        Price
                        <FaTimes className = "close" onClick = {() => {setOpenPopup(false); setCounter(0); setPrice(0);}}>
                        </FaTimes>
                    </div>
                </DialogTitle>
                
                <DialogContent style = {{display: "flex", paddingLeft: "10px", gap: "60px", flexDirection: "column"}}> 
                <div className = "dialog-content-container">
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
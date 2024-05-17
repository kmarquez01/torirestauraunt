import {useState, useEffect, useContext} from "react"

import styles from "../styles/Home.module.css"
import HouseSpecials from "../Menu/HouseSpecial";
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import {Dialog, DialogTitle, DialogContent, Card} from "@mui/material"
import { ShopContext } from "../contexts/shop-context";
import { FaTimes } from "react-icons/fa"


function MainContent(props){

    const [readMore, setRead] = useState(false)

    const { addToCart, cartItems } = useContext(ShopContext);


    // const {id, image, name, description} = props
  
    const [openPopup, setOpenPopup] = useState(false)
  
    // const {setOpenPopup, openPopup} = props
  
    const [dialogData, setDialogData] = useState(null)
  
  
    const [counter, setCounter] = useState(0);
    const [price, setPrice] = useState(0);
  
    
    const [cartItemAmount, setCartItemAmount] = useState(cartItems[HouseSpecials.id])

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
   

    const expanded = <div>
        <p>Hello World!</p>
    </div>

    let linkN;
    
        if (readMore === true){
            linkN = "Read less"
        }
        else{
            linkN = "Read more"
        }
    
    

    return (
        <>
        
        <section className ="showcase" ref = {ref}>
        <div className ="special-container">
            <h1 className = {styles.specials_title}>House Specials</h1>
            <div className = "specials">
            {HouseSpecials.map(item => (
            
              <motion.li 
              className = "special_item" 
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
                <button className = "special_item_link" onClick = {() => {setDialogData(item); setOpenPopup(true);  setCartItemAmount(cartItems[item.id])}}>
                  <div className = "cont1">
                      {/* <figure className = "cards_item_picwrap" data-category = {item.name}> */}
                    <h1 className = "cards_item_wrap">View More</h1>
                    <img src={item.image} alt = "Image" className = "special_item_img" onClick = {() => {setDialogData(item); setOpenPopup(true);  setCartItemAmount(cartItems[item.id])}}/>
                  {/* </figure> */}
                    <div className = "cards_item_info">
                      <h5 className = "cards_item_text">{item.name}</h5>
                    </div>
                  </div>
                </button>
              </motion.li>
           
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
           
            {/* <div className ="showcase-text">
                <h1>Food Suggestions</h1>
                <p>Not seeing the item you wish to order? Feel free to recommend the item and we will work on the possibility of adding it to our menu!
                {readMore && expanded}</p>
                
                <a className ="btn btn-outline" onClick = {() => {setRead(!readMore)}}>{linkN}</a>
                
            </div>

            <div className = "showcase-form card" >
                <div className = "showcase-form-container">
                    <h2>Request an Item</h2>
                    <form>
                        <div className = "form">
                            <input type = "text" name = "name" placeholder = "Name" required></input>
                        </div>
                        <div className ="form">
                            <input type = "text" name = "company" placeholder = "Short description" required></input>
                        </div>
                        <div className ="form">
                            <input type = "text" name = "email" placeholder = "Email" required></input>
                        </div>
                        <input type ="submit" value ="Send" className = {styles.btn}></input>
                    </form>
                </div>
            </div> */}
        </div>
    </section>
    </>
    )
    
}

export default MainContent
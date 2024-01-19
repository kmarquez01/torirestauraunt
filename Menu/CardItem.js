
import { getThemeProps } from "@mui/system";
import Link from "next/link"

import CardInfo from "./CardInfo"

import Cards from "./Cards"

import {useState} from "react"

import {Dialog, DialogTitle, DialogContent, Card} from "@mui/material"

import { FaTimes } from "react-icons/fa"



function CardItem(props){

  // const {setOpenPopup, openPopup, dialogData, setDialogData} = props

  const [openPopup, setOpenPopup] = useState(false)

  const [dialogData, setDialogData] = useState(null)

  const [counter, setCounter] = useState(0);
  const [price, setPrice] = useState(0);


    const handleAdd = () => {
  
        setCounter(counter + 1)
        setPrice(price + dialogData.price)
        console.log(price)

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

  console.log(dialogData)

    return (
      <>
      <div className = "card_holder">
          {CardInfo.map(item => (
            // return (
              <li className = "cards_item" key={item.id} onClick = {props.onClick}>
                <button className = "cards_item_link">
                <div className = "cont1">
                    {/* <figure className = "cards_item_picwrap" data-category = {item.name}> */}
                    <h1 className = "cards_item_wrap">{item.name}</h1>
                <img src={item.image} alt = "Image" className = "cards_item_img" onClick = {() => {setDialogData(item); setOpenPopup(true);}}/>
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

          <Dialog className = "dialogue-box-container" open = {openPopup}>
         
          <DialogTitle>
              <div className = "header-popout">
                  {dialogData.id}
                   <FaTimes className = "close" onClick = {() => {setOpenPopup(false); setCounter(0); setPrice(0);}}>
                   </FaTimes>
              </div>
          </DialogTitle>
          
          <DialogContent> 
           <div className = "fooditem" key = {dialogData.id}>

               <div className = "fooditemsub">
                   {dialogData.name} {"..."}
               </div>

                   { "$" + dialogData.price}

               
           </div>

           <div className = "fooditem">

               <div className = "fooditemsub">
                   {"Total"}  {"..."}
               </div>

                   {"$" + price}

               
           </div>
             
        
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
               <div className = "addcart">
                   <a href = "/Cart" className = "cartbutton">Add to cart</a>
            
              </div>
          </DialogContent>
          
      </Dialog> 
       ) : ""}
      </>
    );
  };



export default CardItem
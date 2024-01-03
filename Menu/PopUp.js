import React from "react"

import {Dialog, DialogTitle, DialogContent} from "@mui/material"

import {useState} from "react"

import { FaTimes } from "react-icons/fa"

import Link from "next/link"

import CardItem from "./CardItem"
import CardInfo from "./CardInfo";

function Popup(props){
    const {title, children, openPopup, setOpenPopup} = props;

    const [counter, setCounter] = useState(0);
    const [ index, setIndex] = useState([]);
    const [price, setPrice] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1)
        setPrice(price + foodItem.price)

    }

    const handleClick1 = () => {
        if(counter === 0){
            setCounter(0)
            setPrice(price)
        }
        else{
            setCounter(counter - 1)
            setPrice(price - foodItem.price)
        }
    }


    const foodItem = CardInfo.find(({id}) => id);
    const foodItem1 = CardInfo.find(({id}) => id == 2);
    const foodItem2 = CardInfo.find(({id}) => id == 3);

    console.log(foodItem1);

  
   return(


       <Dialog className = "dialogue-box-container" open = {openPopup} key = {foodItem.id}>
           <DialogTitle>
               <div className = "header-popout">
                   Total
                    <FaTimes className = "close" onClick = {() => setOpenPopup(false)}>
                    </FaTimes>
               </div>
           </DialogTitle>
           
           <DialogContent> 

            <div className = "fooditem" key = {foodItem.id}>

                <div className = "fooditemsub">
                    {foodItem.name}
                </div>

                    {foodItem.price}

                
            </div>

            <div className = "fooditem" key = {foodItem.id}>

                <div className = "fooditemsub">
                    {"Total"}
                </div>

                    {price}

                
            </div>
              

               <div className = "countmain">
                   <button className = "count" onClick = {handleClick1}>
                       -
                   </button>
                   <div className = "countsub">
                   {counter}
                   </div>
                   <button className = "count" onClick = {handleClick}>
                       +
                   </button>
                </div>
                <div className = "addcart">
                    <a href = "/Cart" className = "cartbutton">Add to cart</a>
               </div>
           </DialogContent>
       </Dialog>
   )
}

export default Popup
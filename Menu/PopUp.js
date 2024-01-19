import React from "react"

import {Dialog, DialogTitle, DialogContent, Card} from "@mui/material"

import {useState} from "react"

import { FaTimes } from "react-icons/fa"

import Link from "next/link"

import CardItem from "./CardItem"
import CardInfo from "./CardInfo";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Popup(props){
    const {openPopup, setOpenPopup, dialogData} = props;

  
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



    

    // const handleClick1 = () => {
    //     if(counter === 0){
    //         setCounter(0)
    //         setPrice(price)
    //     }
    //     else{
    //         setCounter(counter - 1)
    //         setPrice(price - foodItem.price)
    //     }
    // }


    // const checkFoodItem = (food) => {

    //     const foodItem = CardInfo.findIndex((item) => item.id === food.id);
    //     const updatedFoods = [...index];

    //     const updatedFood = updatedFoods[foodItem];
    //     updatedFood[foodItem] = updatedFoods
    //     setIndex(updatedFoods); 
    //     console.log(updatedFoods)
    // }
    // // const foodItem = CardInfo.findIndex((item) => item.id === item.id);
    // const foodItem1 = CardInfo.find(({id}) => id === cardId);
    // console.log(foodItem1)
    // const foodItem = CardInfo.find(({id}) => id == 2);
    // const foodItem2 = CardInfo.find(({id}) => id == 3);

    // console.log(foodItem);
    // const foodItem = CardInfo.find((item) => item.id === cardId.id)
    // const foodItem = CardInfo.findIndex((item) => item.id === food.id);
    // console.log(foodItem)
   

   return(
    <div className = "dialogue-box-container">
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
       
    </div>
    
   )

// return(
//     <>
//     <Button variant="primary" onClick={handleShow}>
//       Launch demo modal
//     </Button>

//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Modal heading</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handleClose}>
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   </>
// );
    
}

export default Popup
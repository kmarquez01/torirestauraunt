

import CardItem from "./CardItem"

import Navigation from "../Navigation"

import Popup from "./PopUp"

import {useState} from "react"

import CardInfo from "./CardInfo"


function Cards(){

    const [openPopup, setOpenPopup] = useState(false)
    const [dialogData, setDialogData] = useState(null)


    return(
        <div>
        <Navigation />
        <div className = "cards">
    
            <h1>Menu</h1>
            <div className = "cards_container">
            {/* data = {() => setModalData(CardInfo)} */}
                    <ul className = "cards_items">
                        <CardItem onClick = {() => {setOpenPopup(true); setDialogData(null)}}  />
                        {/* <Popup openPopup = {openPopup} setOpenPopup = {setOpenPopup} setModalData = {setModalData} modalData = {modalData}></Popup>   */}
                    </ul>


            </div>
        </div>
    </div>
        
    )
}

export default Cards
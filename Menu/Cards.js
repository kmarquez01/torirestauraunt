

import CardItem from "./CardItem"

import Navigation from "../Navigation"

import Popup from "./PopUp"

import {useState} from "react"

import CardInfo from "./CardInfo"


function Cards(){

    const [openPopup, setOpenPopup] = useState(false)


    return(
        <div>
        <Navigation />
        <div className = "cards">
    
            <h1>Menu</h1>
            <div className = "cards_container">

                    <ul className = "cards_items">
                        <CardItem onClick = {() => setOpenPopup(true)} />
                        <Popup openPopup = {openPopup} setOpenPopup = {setOpenPopup} key = {CardInfo.id}></Popup>  
                    </ul>


            </div>
        </div>
    </div>
        
    )
}

export default Cards
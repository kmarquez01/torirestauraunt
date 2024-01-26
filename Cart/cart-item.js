import React from "react"
import CardInfo from "../Menu/CardInfo"

function CartItem(props){

const {item} = props.data

    return(
        <div className = "card_holder">          
              <li className = "cards_item" key={item.id} onClick = {props.onClick}>
                <button className = "cards_item_link">
                <div className = "cont1">
                    {/* <figure className = "cards_item_picwrap" data-category = {item.name}> */}
                    <h1 className = "cards_item_wrap">{item.name}</h1>
                <img src={item.image} alt = "Image" className = "cards_item_img"/>
                {/* </figure> */}
                <div className = "cards_item_info">
                  <h5 className = "cards_item_text">{item.description}</h5>
                </div>
                </div>
                </button>
              </li>
          
          </div>
    )
}

export default CartItem
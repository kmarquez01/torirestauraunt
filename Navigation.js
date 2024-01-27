import Link from "next/link"

import { HiMenu } from "react-icons/hi"

import { FaTimes } from "react-icons/fa"

import React, {useState} from "react"
import { FiShoppingCart } from "react-icons/fi";
import { ShopContext } from "./contexts/shop-context"
import {useContext} from "react"
import CardInfo from "./Menu/CardInfo";


function Navigation(){

    

   const [state, setState] = useState(false)
   const [numberClicked, setNumberClicked] = useState(false)

   const {addToCart, cartItems, removeFromCart, totalCartAmount, getDefault} = useContext(ShopContext)

//    const cartItemAmount = useState(cartItems[CardInfo.id])

   const totalAmount = totalCartAmount()


   const object = 
       
       <div className = "death">
           <li><Link href="/Home"><button className = "navbut" >Home</button></Link></li>
           <li><Link href="/Menu"><button className = "navbut">Menu</button></Link></li>
           <li><Link href="/About"><button className = "navbut">About</button></Link></li>
           <li><Link href="/Cart"><button className = "navbut">Cart</button></Link></li>
       </div>

    const handleClick = () => {
        
        if(state === false){
           setState(true)
        }
        else{
        setState(false)
        }
        return object
    }

    
    return(
               
            <div className ="nav">
            <div className = "container flex">
                <h1 className ="logo">
                    <Link href = "/Home"><button className = "logo">Lafu</button></Link>
                    </h1>
                
                <nav className = "navigation-bar">
                    <div className = "shopping-cart-container">
                    <Link href="/Cart"><FiShoppingCart className = "shopping-cart" /></Link>
                        <div className = "cart-added">{console.log(totalAmount)}</div>
                    </div>
                    <ul>
                        {state === true ? object: ''}

                        <button className = "sandwich" onClick = {handleClick}>
                            {state === true ? <FaTimes />: <HiMenu/>}
                          
                        </button>                
                    </ul>
                    
                </nav>
            </div>
        </div>
      
        ) 
    
}

export default Navigation
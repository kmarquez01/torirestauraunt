import Link from "next/link"

import { HiMenu } from "react-icons/hi"

import { FaTimes } from "react-icons/fa"

import React, {useState, useEffect, useRef} from "react"
import { FiShoppingCart } from "react-icons/fi";
import { ShopContext } from "./contexts/shop-context"
import {useContext} from "react"
import CardInfo from "./Menu/CardInfo";


function Navigation(){


   const [state, setState] = useState(false)
   const [numberClicked, setNumberClicked] = useState(false)

   const {cartTotal} = useContext(ShopContext)

//    const cartItemAmount = useState(cartItems[CardInfo.id])

   const totalAmount = cartTotal()

   let sideRef = useRef();

    useEffect(() => {
        let mouseChecker = (e) =>{
            if(!sideRef.current.contains(e.target)){
                setState(false)
            }
        }
        document.addEventListener("mousedown", mouseChecker);

        return() => {
        document.removeEventListener("mousedown" , mouseChecker)
        }
    })


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
       
    }   

    
    return(
               
            <div className ="nav" ref = {sideRef}>
            <div className = "container flex">
                <h1 className ="logo">
                    <Link href = "/Home"><button className = "logo">Lafu</button></Link>
                    </h1>
                
                <nav className = "navigation-bar">
                    <Link href="/Cart"><div className = "shopping-cart-container">
                        <FiShoppingCart className = "shopping-cart" />
                            <div className = "cart-added">{(totalAmount)}</div>
                        </div>
                    </Link>
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
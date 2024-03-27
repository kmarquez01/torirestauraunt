import Link from "next/link"

import { HiMenu } from "react-icons/hi"

import { FaTimes } from "react-icons/fa"

import React, {useState, useEffect, useRef} from "react"
import { FiShoppingCart} from "react-icons/fi";
import { FaToriiGate } from "react-icons/fa";
import { ShopContext } from "./contexts/shop-context"
import {useContext} from "react"
import CardInfo from "./Menu/CardInfo";
import { useMediaQuery } from 'usehooks-ts'


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
           <li onClick = {() => { setState(false);}}><Link href="/Home"><button className = "navbut" >Home</button></Link></li>
           <li onClick = {() => { setState(false);}}><Link href="/Menu"><button className = "navbut">Menu</button></Link></li>
           <li onClick = {() => { setState(false);}}><Link href="/About"><button className = "navbut">About</button></Link></li>
           <li onClick = {() => { setState(false);}}><Link href="/Cart"><button className = "navbut">Cart</button></Link></li>
       </div>

    const webNav = 
        <div className = "webnav-menu">
            <li onClick = {() => { setState(false);}}><Link href="/Home"><button className = "navbut" >Home</button></Link></li>
            <li onClick = {() => { setState(false);}}><Link href="/Menu"><button className = "navbut">Menu</button></Link></li>
            <li onClick = {() => { setState(false);}} ><Link href="/About"><button className = "navbut">About</button></Link></li>
            <li onClick = {() => { setState(false);}}><Link href="/Cart"><button className = "navbut">Contact</button></Link></li>
        </div>


    const handleClick = () => {
        
        if(state === false){
           setState(true)
        }
        else{
        setState(false)
        }
       
    }   

    const isMobile = useMediaQuery('(max-width: 800px)')

    
    return(
               
            <div className ="nav" ref = {sideRef}>
            <div className = "container flex">
            <Link href = "/Home">
                <button className = "logo">
                <div className = "logo-container">
                    <div className = "circle">
                        <div className = "gate">
                            <FaToriiGate />
                        </div>
                    </div>
                    <h1 className ="logo">
                        Tori
                    </h1>
                </div>
                </button>
                </Link>
                <nav className = "navigation-bar">
                    <Link href="/Cart"><div className = "shopping-cart-container">
                        <FiShoppingCart className = "shopping-cart" />
                            <div className = "cart-added">{(totalAmount)}</div>
                        </div>
                    </Link>
                    <ul className = "nav-holder">
                        {(!isMobile && state === false) ? webNav:

                        <button className = "sandwich" onClick = {handleClick}>
                            {state === true ? <FaTimes />: <HiMenu/>}
                            {state === false ? '' : object}  
                        </button>   }             
                    </ul>
                    
                </nav>
            </div>
        </div>
      
        ) 
    
}

export default Navigation
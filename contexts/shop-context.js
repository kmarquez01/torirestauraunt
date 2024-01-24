import React, {createContext, useState} from 'react'
import CardInfo from '../Menu/CardInfo'


export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for(let index = 1; index < CardInfo.length + 1; index++){
        cart[index] = 0
    }
    return cart
}

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())




    const addToCart = (itemID, counter) => {
    
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] + counter}))
        console.log(counter)
    }

    const removeFromCart = (itemID, counter) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] - counter}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart}

    console.log(cartItems)
    return(
        <ShopContext.Provider value = {contextValue}>{props.children}</ShopContext.Provider>
    )
}
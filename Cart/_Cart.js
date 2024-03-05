
import {useContext} from "react"
import CardInfo from "../Menu/CardInfo"
import CartItem from "./cart-item"
import { ShopContext } from "../contexts/shop-context"
import { FaTrash } from "react-icons/fa";
import  Link  from 'next/link'

function Cart(props){

    const {handleSubtract, handleAdd, cartItemAmount} = props
    const {addToCart, cartItems, removeFromCart, totalCartAmount, emptyCart, emptyItem} = useContext(ShopContext)

    const totalAmount = totalCartAmount()

    const cartStyle = {
        // display: "flex",
        height: "100%",
        flexDirection: "column",
    }

    const cartStyleEmpty = {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-around"
    }

    const cartStyleOneItem = {
       
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 33% 33% 34%)",
        justifyItems: "start",
        alignItems: "center",
        justifyContent: "center",
        borderStyle: "groove",
        borderLeftStyle: "none",
        borderRightStyle: "none",
        borderBottomStyle: "groove",
        paddingTop: "20px",
        paddingBottom: "20px",
        borderWidth: "2px"
          
         
    }


    return(
        <div className = "cart-page">
            <div className = "cart-page-sections">
                <div className = "cart-section">
                    <div className = "cart-container">
                        <div className = "cart-header-container">
                                <h1 className = "cart-header">Cart</h1>
                                <div className = "price">Price</div>
                        </div> 
                        <div className = "cart-items" style = {totalAmount === 0 ? cartStyleEmpty : cartStyle}>
                        {totalAmount === 0 ? (
                            <>
                            <div className = "empty-cart-disclaimer">
                                Cart is empty
                                <div class = "continue">
                                    <Link href = "/Menu">
                                        Continue Browsing
                                    </Link>
                                </div>
                            </div>
                           
                            </>
                    
                        )
                        :  (
                            CardInfo.map((item) => {
                                if (cartItems[item.id] !== 0){
                                    return ( 
                                    <>
                                    
                                        <div className = "cart_holder">          
                                            <li className = "cart_item" key={item.id} style = {totalAmount === 1 ? cartStyleOneItem : cartStyle}>
                                                <div className = "cart_item_link">
                                                    <div className = "image_holder">            
                                                        <img src={item.image} alt = "Image" className = "carts-item-img"/>
                                                    </div>
                                                </div>
                                                <div className = "details-container">
                                                    <h1 className = "carts_item_wrap">{item.name}</h1>
                                                    <div className = "count-container">
                                                        <button className = "change-counter" onClick = {() => removeFromCart(item.id, 1)}>
                                                            -
                                                        </button>
                                                        <div className = "count-tracker">
                                                            {cartItems[item.id]}
                                                        </div>
                                                        <button className = "change-counter" onClick = {() => addToCart(item.id, 1)}>
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className = "item-price">
                                                    C${item.price.toFixed(2)}
                                                    <div className = "trash-item">
                                                        <FaTrash onClick = {() => emptyItem(item.id)} />
                                                    </div>
                                                </div>
                                                
                                            </li>                  
                                        </div>
                                    </>
                                    
                                    
                                    )
                                }
                            }))}
                            <div className = "subtotal-footer-container">
                                <div className = "trash-container">
                                        Empty Cart
                                        <FaTrash onClick = {emptyCart} />
                                </div>
                            </div> 
                            
                        </div>
                    </div>
                </div>
                <div className = "order-summary">
                        <div className = "order-summary-container">
                            <h1 className = "cart-header">Order Summary</h1>
                            <div className = "subtotal-container">
                                Subtotal : C${totalAmount.toFixed(2)}
                            </div>
                            <div className = "tax-container">
                                GST: C${(totalAmount * 0.05).toFixed(2)}
                            </div>
                            <div className = "tax-container">
                                PST : C${(totalAmount * 0.07).toFixed(2)}
                            </div>
                            <div className = "total-container">
                                Total : C${((totalAmount * 0.07) + (totalAmount * 0.05) + totalAmount).toFixed(2)}
                            </div>
                            <button className = "checkout" >
                            Checkout
                            </button>
                        </div>   
                    </div>
            </div>
        </div>
    )
}

export default Cart
import React, { useContext, useState } from 'react';
import { ShopContext } from './contexts/shop-context';
import CardInfo from './Menu/CardInfo';
import { FiShoppingCart} from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import Link from "next/link"
import { motion } from "framer-motion"

const Minicart = () => {
    const { cartItems, emptyItem, totalCartAmount, addToCart, removeFromCart } = useContext(ShopContext);
    const [isMinicartOpen, setIsMinicartOpen] = useState(false);

    const totalAmount = totalCartAmount();

    const toggleMinicart = () => {
        setIsMinicartOpen(!isMinicartOpen);
    };

    const cartAnimationStyle = {
        right: "0px",
        transition: {
            duration: 0.25,
            
        }
    }

    return (
        <div className="minicart">
            <button onClick={toggleMinicart} className="minicart-toggle">
                <FiShoppingCart className = "shopping-cart"/>
                {isMinicartOpen ? <div className = "background-dim"></div> : null}
                
            </button>
            {isMinicartOpen && (
                <motion.div 
                className="minicart-content"
                initial = "hidden"
                animate = "visible"
                variants ={{
                    visible: cartAnimationStyle,
                    hidden: { right: "-300px"}
                }}>
                    <div className = "minicart-header">
                        <h3>Mini Cart</h3>
                    </div>
                    <div className = "minicart-container">             
                        {Object.keys(cartItems).map((itemId) => {
                            const itemInfo = CardInfo.find((item) => item.id === Number(itemId));
                            if (cartItems[itemId] > 0) {
                                return (
                                    <>
                                    <div key={itemId} className="minicart-item">
                                        <img className = "mini-image" src = {itemInfo.image}></img>
                                        <div className = "item-content">
                                            <span>{itemInfo.name}</span>
                                            
                                            <div className = "count-mini-container">
                                                        <button className = "change-mini-counter" onClick = {() => removeFromCart(itemId, 1)}>
                                                            -
                                                        </button>
                                                        <div className = "count-mini-tracker">
                                                            {cartItems[itemId]}
                                                        </div>
                                                        <button className = "change-mini-counter" onClick = {() => addToCart(itemId, 1)}>
                                                            +
                                                        </button>
                                                    </div>
                                        </div>
                                        <div className = "priced-item">
                                            <div className = "trash-item">
                                                <FaTrash onClick = {() => emptyItem(itemId)} />
                                            </div>
                                            <span className = "mini-item-price">C${itemInfo.price.toFixed(2)}</span>
                                        </div>
                                    </div>                         
                                    </>
                                );
                            }                         
                            return null;
                        })}
                    </div>
                    <div className = "checkout-button-container">
                    <div className = "subtotal-mini-container">
                                Subtotal : C${totalAmount.toFixed(2)}
                            </div>
                        <Link href="/Cart" className = "cartpage-button">
                            View Cart
                        </Link>
                    </div>
                </motion.div>
                
            )}
        </div>
        
    );
};

export default Minicart;
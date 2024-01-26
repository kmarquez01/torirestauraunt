
import Cart from "../../Cart/_Cart"
// import {handleSubtract, handleAdd, cartItemAmount} from "../../Menu/CardItem"
import Navigation from "../../Navigation"
import { ShopContextProvider } from "../../contexts/shop-context"


function Carts(props){

    
    return(
        <div>
           
            <Navigation />
            <Cart/>
        
          
        </div>
    )
}

export default Carts

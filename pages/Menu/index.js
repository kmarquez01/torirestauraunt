

import Cards from "../../Menu/Cards"
import { ShopContextProvider } from "../../contexts/shop-context"

function Menus(){
    return(
        <div>
    
            {/* <ShopContextProvider> */}
            <Cards />
            {/* </ShopContextProvider> */}
        </div>
    )
}

export default Menus

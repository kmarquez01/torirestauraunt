
import { Menu } from "@mui/material"
import Cart from "../Cart/_Cart"
import { ShopContextProvider } from "../contexts/shop-context"
import Homes from "./Home/index"


import {Link} from 'next/link'
import Abouts from "./About"





function App({children}){

    return(
      
      <div>
          <Homes />
      </div>
                
   

        
    )
}

export default App
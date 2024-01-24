import { ShopContextProvider } from "../contexts/shop-context"
import ReactDOM from 'react-dom'
import Homes from "./Home/index"


import {Link} from 'next/link'




function App(){

    ReactDOM.render(
      
      <div>
      
      <ShopContextProvider>
      <Homes />
      </ShopContextProvider>
      </div>
                
   

        
    )
}

export default App
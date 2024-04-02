import { ShopContextProvider } from '../contexts/shop-context'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <ShopContextProvider>
      <Component {...pageProps} />
    </ShopContextProvider>

    </>
  )
}

export default MyApp

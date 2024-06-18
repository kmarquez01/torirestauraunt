import { ShopContextProvider } from '../contexts/shop-context'
import '../styles/globals.css'
import { Poppins } from 'next/font/google'

const poppins= Poppins({
  weight: '400',
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {

  return (
    <>
    <main className = {poppins.className}>
      <ShopContextProvider>
        <Component {...pageProps} />
      </ShopContextProvider>
    </main>

    </>
  )
}

export default MyApp

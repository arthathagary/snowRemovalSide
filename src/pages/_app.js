import NavBar from '@/components/NavBar/NavBar'
import '../../src/app/globals.css'
import Footer from '@/components/Footer/Footer'

export default function MyApp({ Component, pageProps }) {
    return <>
    <NavBar />
     <Component {...pageProps} />
     <Footer />
     </>
  }
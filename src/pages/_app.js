import NavBar from '@/components/NavBar/NavBar'
import '../../src/app/globals.css'
import Footer from '@/components/Footer/Footer'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets:['latin'],
    variable:'--font-inter',
    weight:['100','300','400','500','700','900']
  })

export default function MyApp({ Component, pageProps }) {
    return <main className={poppins.className}>
    <NavBar />
     <Component {...pageProps} />
     <Footer />
     </main>
  }
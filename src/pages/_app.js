// pages/_app.js
import NavBar from '@/components/NavBar/NavBar';
import '../app/globals.css';
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer/Footer';

const poppins = Poppins({
    subsets:['latin'],
    variable:'--font-inter',
    weight:['100','300','400','500','700','900']
  })

function MyApp({ Component, pageProps }) {
  return <main className={poppins.className}>
    <NavBar />
    <Component {...pageProps} />
    <Footer/>
    </main>;
}

export default MyApp;

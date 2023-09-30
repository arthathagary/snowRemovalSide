// pages/_app.js
import '../app/globals.css';
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets:['latin'],
    variable:'--font-inter',
    weight:['100','300','400','500','700','900']
  })

function MyApp({ Component, pageProps }) {
  return <main className={poppins.className}><Component {...pageProps} /></main>;
}

export default MyApp;

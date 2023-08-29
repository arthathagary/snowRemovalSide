import './globals.css'
// import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })



const poppins = Poppins({
  subsets:['latin'],
  variable:'--font-inter',
  weight:['100','300','400','500','700','900']
})

export const metadata = {
  title: 'Mr Snow Removal',
  description: 'A snow removing company based on Markham',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

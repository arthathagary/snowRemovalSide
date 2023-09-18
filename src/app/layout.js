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
      <head>
    <link rel="shortcut icon" href="/images/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>

</head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

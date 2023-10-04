
import HomePage from '@/app/home/HomePage'
import Head from 'next/head'


export default function Home() {
  return (
    <>
  <Head>
    <title>Mr Snow Removal</title>
    <link rel="shortcut icon" href="" />
    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
  </Head>
      <HomePage />
    
    </>
  )
}

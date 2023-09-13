import React from 'react'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'

const layout = ({children}) => {
  return (
    <div>
        <NavBar />
        {children}
        <Footer />
    </div>
    
  )
}

export default layout
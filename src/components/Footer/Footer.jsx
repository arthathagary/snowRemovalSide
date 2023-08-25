import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between w-full h-[10vh] items-center md:px-32 px-8 bg-gray-800 '>
    <p className='text-white'>©{new Date().getFullYear()} Mr Snow Removal | Residential Snow Removal</p>
    <p className='text-white'>I accept the terms.Thank you for the information.No longer interested.</p>
    </div>
  )
}

export default Footer
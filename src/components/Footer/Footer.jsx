import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center w-full h-[10vh] items-center md:px-32 px-8 bg-gray-800 '>
    <p className='text-white'>©{new Date().getFullYear()} Mr Snow Removal | Residential Snow Removal</p>
    </div>
  )
}

export default Footer
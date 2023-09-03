import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-center justify-center items-center w-full md:h-[10vh] md:items-center md:px-32 px-8 bg-gray-600 p-4'>
    <p className='text-white'>©{new Date().getFullYear()} Mr. Snow Removal</p>
    </div>
  )
}

export default Footer
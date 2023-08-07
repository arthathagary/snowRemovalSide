import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center w-full h-[10vh] items-center md:px-32 px-8'>
    <p>©{new Date().getFullYear()} Mr. Snow-It-All | Residential Snow Removal</p>
    </div>
  )
}

export default Footer
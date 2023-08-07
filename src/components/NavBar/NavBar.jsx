import React from 'react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav className='flex justify-between w-full h-[80px] items-center md:px-32 px-8 bg-[#00E8EB] '>
        <div className=''>Logo</div>

        {/* {Desktop Menus} */}
        
            <ul className='hidden md:flex gap-8'>
                <a href='#home'><li className='text-[1.1rem] text-gray-600 hover:text-gray-950'>Home</li></a>
                <a href='#services'><li className='text-[1.1rem] text-gray-600 hover:text-gray-950'>Services</li></a>
                <a href='#rates'><li className='text-[1.1rem] text-gray-600 hover:text-gray-950'>Rates</li></a>
                <a href='#faq'><li className='text-[1.1rem] text-gray-600 hover:text-gray-950'>FAQs</li></a>
                <a href='#contactus'><li className='text-[1.1rem] text-gray-600 hover:text-gray-950'>Contact Us</li></a>
            </ul>
        
        <button className='group hidden md:flex bg-[#E6ECEE] py-3 px-6 rounded-3xl text-[1.1rem] text-[#004450]'><span>Call Us Now</span></button>

        {/* {Hamburger Button} */}
        <div className='z-10 md:hidden cursor-pointer'>
        {/* {!nav?<FaBars/>:<FaTimes/>} */}
        </div>

        {/* {Mobile Menus} */}
        
        <ul className={'hidden'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>Services</li>
                <li className='py-6 text-4xl'>Rates</li>
                <li className='py-6 text-4xl'>FAQs</li>
                <li className='py-6 text-4xl'>Contact Us</li>
            </ul>
        
    </nav>
  )
}

export default NavBar
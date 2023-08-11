'use client';
import React,{useState} from 'react'
import Image from 'next/image'
import {FaBars,FaTimes,FaArrowRight} from 'react-icons/fa'

const NavBar = () => {
  const [nav,setNav] = useState(false);

  const handleClick = ()=>setNav(!nav)

  return (
    <nav className='flex justify-between w-full h-[80px] items-center md:px-32 px-8 bg-gray-800 '>
        <div className=''>Logo</div>

        {/* {Desktop Menus} */}
        
            <ul className='hidden md:flex gap-8'>
                <a href='#home'><li className='text-[1.1rem] text-white hover:text-[#bfecec]'>Home</li></a>
                <a href='#services'><li className='text-[1.1rem] text-white hover:text-[#bfecec]'>Services</li></a>
                <a href='#rates'><li className='text-[1.1rem] text-white hover:text-[#bfecec]'>Rates</li></a>
                <a href='#faq'><li className='text-[1.1rem] text-white hover:text-[#bfecec]'>FAQs</li></a>
                <a href='#contactUs'><li className='text-[1.1rem] text-white hover:text-[#bfecec]'>Contact Us</li></a>
            </ul>
        
        <button className='group hidden md:flex bg-[#E6ECEE] py-3 px-6 rounded-3xl text-[1.1rem] text-[#004450]'><span>Call Us Now</span></button>

        {/* {Hamburger Button} */}
        <div onClick={handleClick} className='z-50 md:hidden cursor-pointer'>
        {!nav?<FaBars color='white'/>:<FaTimes/>}
        </div>

        {/* {Mobile Menus} */}
        
        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[white] flex flex-col justify-center items-center z-40'} onClick={handleClick}>
                <a href='#home'><li className='py-6 text-4xl'>Home</li></a>
                <a href='#services'><li className='py-6 text-4xl'>Services</li></a>
                <a href='#rates'><li className='py-6 text-4xl'>Rates</li></a>
                <a href='#faq'><li className='py-6 text-4xl'>FAQs</li></a>
                <a href='#contactUs'><li className='py-6 text-4xl'>Contact Us</li></a>
            </ul>
        
    </nav>
  )
}

export default NavBar
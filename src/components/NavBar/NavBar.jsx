'use client';
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import {FaBars,FaTimes,FaArrowRight} from 'react-icons/fa'
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../../../public/assets/images/logo.png'


const NavBar = () => {
  const [nav,setNav] = useState(false);

  const handleClick = ()=>setNav(!nav)

  //mobile


  return (
    <nav className='flex justify-between w-full h-[80px] items-center md:px-32 px-8 bg-[#4B5D5E] sticky top-0 z-40'>
        
        <Image src={logo} alt='logo' width={90}/>

        {/* {Desktop Menus} */}
        
            <ul className='hidden md:flex gap-8'>
                <li className='text-[1.1rem] text-white hover:text-[#bfecec]'><Link href="/">Home</Link></li>
                <li className='text-[1.1rem] text-white hover:text-[#bfecec]'><Link href="#services">Services</Link></li>
                <li className='text-[1.1rem] text-white hover:text-[#bfecec]'><Link href="#rates">Rates</Link></li>
                <li className='text-[1.1rem] text-white hover:text-[#bfecec]'><Link href="#faq">FAQs</Link></li>
                <li className='text-[1.1rem] text-white hover:text-[#bfecec]'><Link href="/ContactUs">Contact Us</Link></li>
            </ul>
        
        <Link href="#rates"><button className='group hidden md:flex bg-[#E6ECEE] py-3 px-6 rounded-3xl text-[1.1rem] text-[#004450]'><span>Book Now !</span></button></Link>

        {/* {Hamburger Button} */}
        <div onClick={handleClick} className='z-50 md:hidden cursor-pointer'>
        {!nav?<FaBars color='white'/>:<FaTimes color='white'/>}
        </div>

        {/* {Mobile Menus} */}
        
        <ul
         className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#4B5D5E] flex flex-col justify-center items-center z-40'} onClick={handleClick} >
                <li className='py-6 text-4xl text-white'><Link href="/">Home</Link></li>
                <li className='py-6 text-4xl text-white'><Link href="#services">Services</Link></li>
                <li className='py-6 text-4xl text-white'><Link href="#rates">Rates</Link></li>
                <li className='py-6 text-4xl text-white'><Link href="#faq">FAQs</Link></li>
                <li className='py-6 text-4xl text-white'><Link href="/ContactUs">Contact Us</Link></li>
                
                
               
            </ul>
        
    </nav>
  )
}

export default NavBar
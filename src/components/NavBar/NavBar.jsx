'use client';
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import {FaBars,FaTimes,FaArrowRight} from 'react-icons/fa'
import Link from 'next/link';
import { animateScroll as scroll} from 'react-scroll';
import { useRouter } from 'next/navigation';
import logo from '../../../public/assets/images/logo.png'


const NavBar = () => {
  const router = useRouter();
  const [nav,setNav] = useState(false);

  const handleClick = ()=>setNav(!nav)

  
  const scrollToTop = () => {
    scroll.scrollToTop({
      smooth : 'easeInOutQuad'
    });
  };
 

  

  return (
    <nav className='flex justify-between w-full h-[100px] items-center md:px-32 px-8 bg-gray-600 sticky top-0 z-40'>
        <div className='mt-2'>
        <Image src={logo} alt='logo' width={300}/>
        </div>

        {/* {Desktop Menus} */}
        
            <ul className='hidden md:flex gap-8'>
            <li className='text-xl text-white hover:text-[#bfecec] font-medium'><Link href="/" onClick={scrollToTop}>Home</Link></li>
                <li className='text-xl text-white hover:text-[#bfecec] font-medium'><Link href="/#services">Services</Link></li>
                <li className='text-xl text-white hover:text-[#bfecec] font-medium'><Link href="/#rates">Rates</Link></li>
                <li className='text-xl text-white hover:text-[#bfecec] font-medium'><Link href="/#faq">FAQs</Link></li>
                <li className='text-xl text-white hover:text-[#bfecec] font-medium'><Link href="/contact">Contact Us</Link></li>
            </ul>
        
        <Link href="/#rates"><button className='group hidden md:flex bg-[#E6ECEE] py-3 px-6 rounded-3xl text-xl text-[#872B36] font-bold'><span>Book Now!</span></button></Link>

        {/* {Hamburger Button} */}
        <div onClick={handleClick} className='z-50 md:hidden cursor-pointer'>
        {!nav?<FaBars color='white'/>:<FaTimes color='white'/>}
        </div>

        {/* {Mobile Menus} */}
        
        <ul
         className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#4B5D5E] flex flex-col justify-center items-center z-40'} onClick={handleClick} >
                <li className='py-6 text-4xl text-white'><Link href="/">Home</Link></li>
                <li className='py-6 text-4xl text-white'><Link href="/#services">Services</Link></li>
                <li className='py-6 text-4xl text-white'><Link href="/#rates">Rates</Link></li>
                <li className='py-6 text-4xl text-white'><Link href="/#faq">FAQs</Link></li>
                <li className='py-6 text-4xl text-white'><Link href="/contact">Contact Us</Link></li>
            </ul>
        
    </nav>
  )
}

export default NavBar
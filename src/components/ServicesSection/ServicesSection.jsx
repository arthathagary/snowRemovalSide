"use client";
import React from 'react'
import Image from 'next/image';
import oshawaImg from '../../../public/assets/images/osawa.png'
import whitbyImg from '../../../public/assets/images/whitby.png'
import { BiSolidRightArrowCircle} from "react-icons/bi";


const ServicesSection = () => {
  return (
    <div id='services' className='w-full md:px-32 px-8 my-10'>
    <main>
    <div className='md:flex md:gap-16 mb-8'>
    <div>
    <h2 className="font-bold text-3xl mb-3">Services</h2>
    <p>Mr. Snow-It-All now offers Durham Region residents 2 snow removal options. Seasonal and Pay-Per-Visit services.Our Seasonal service is for customers wanting a hassle and worry free winter. Our contract begins November 1st and expires March 31st of the following year, giving our customers 5 months of snowfall coverage. Our Pay-Per-Visit services are for the once in a while customers. Whether you're out of town or just not in the mood, P-P-V is a perfect option for customers not looking to commit long term.Both services include FREE salt spreading. (Customer provided)</p>
    </div>
    {/* <div className='justify-self-center'>
      <Image src={whitbyImg} alt='' width={'250'} className='my-8'/>
      <Image src={oshawaImg} alt='' width={'250'}/>
      <h1>image</h1>
      <h1>image</h1>
    </div> */}
    
    </div>

    <div className='md:grid md:grid-cols-2 gap-8 md:w-full'>
    <div>
      <h2 className="font-bold text-xl mb-3">OUR GUARANTEE</h2>
      <ul>
        <li className='mb-2 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>24-hour service, 7 days a week from November 1st to March 31.</span></li>
        <li className='mb-2 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>Competitively priced and fully serviced, flat-rate seasonal contracts.</span></li>
        <li className='mb-2 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>Clearance of 3cms or more.</span></li>
        <li className='mb-2 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>Personalized planning to ensure the residence is cleared exactly how you want it.</span></li>
        <li className='mb-2 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>The use of high powered snow blowers to clear through all snow conditions and plastic shovels to prevent damaging your driveway and/or interlock. NO snow plows.</span></li>
        <li className='mb-2 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>FREE salt spreading. (Provided by customer)</span></li>
        <li className='mb-2 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>Top quality customer service.</span></li>
        <li className='flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>Fast response time.</span></li>
      </ul>
    </div>
    <div>
    <h2 className="font-bold text-xl mb-3">SERVICE AREA</h2>
    <iframe src="https://www.google.com/maps/d/embed?mid=1O_-Fa1NMUQMmN38IxnR2nwjAaQEykVNz&ehbc=2E312F" className='h-[320px] w-full'></iframe>
    </div>
    </div>
    
    </main>
    </div>
  )
}

export default ServicesSection
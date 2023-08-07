"use client";
import React from 'react'
import Image from 'next/image';
import oshawaImg from '../../../public/assets/images/osawa.png'
import whitbyImg from '../../../public/assets/images/whitby.png'

const ServicesSection = () => {
  return (
    <div id='services' className='w-full md:px-32 px-8'>
    <main className='pt-8'>
    <div className='md:flex md:gap-16 mb-8'>
    <div>
    <h2 className="font-bold text-xl mb-3">Services</h2>
    <p>Mr. Snow-It-All now offers Durham Region residents 2 snow removal options. Seasonal and Pay-Per-Visit services.Our Seasonal service is for customers wanting a hassle and worry free winter. Our contract begins November 1st and expires March 31st of the following year, giving our customers 5 months of snowfall coverage. Our Pay-Per-Visit services are for the once in a while customers. Whether you're out of town or just not in the mood, P-P-V is a perfect option for customers not looking to commit long term.Both services include FREE salt spreading. (Customer provided)</p>
    </div>
    <div>
    <h2 className="font-bold text-xl mb-3">SERVICE AREA</h2>
    <iframe src="https://www.google.com/maps/d/embed?mid=1O_-Fa1NMUQMmN38IxnR2nwjAaQEykVNz&ehbc=2E312F" className='md:h-[290px] md:w-[550px] h-[320px] w-full'></iframe>
    </div>
    </div>

    <div className='md:grid md:grid-cols-2 gap-8 md:w-full'>
    <div>
      <h2 className="font-bold text-xl mb-3">OUR GUARANTEE</h2>
      <ul>
        <li className='mb-3'>24-hour service, 7 days a week from November 1st to March 31.</li>
        <li className='mb-3'>Competitively priced and fully serviced, flat-rate seasonal contracts.</li>
        <li className='mb-3'>Clearance of 3cms or more.</li>
        <li className='mb-3'>Personalized planning to ensure the residence is cleared exactly how you want it.</li>
        <li className='mb-3'>The use of high powered snow blowers to clear through all snow conditions and plastic shovels to prevent damaging your driveway and/or interlock. NO snow plows.</li>
        <li className='mb-3'>FREE salt spreading. (Provided by customer)</li>
        <li className='mb-3'>Top quality customer service.</li>
        <li className='mb-3'>Fast response time.</li>
      </ul>
    </div>
    <div className='justify-self-center'>
      <Image src={whitbyImg} alt='' width={'250'} className='my-8'/>
      <Image src={oshawaImg} alt='' width={'250'}/>
      {/* <h1>image</h1>
      <h1>image</h1> */}
    </div>
    </div>
    
    </main>
    </div>
  )
}

export default ServicesSection
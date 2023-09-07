"use client";
import React,{ useEffect, useState,useRef } from 'react'
import Image from 'next/image';
import { MdStars } from "react-icons/md";

import {motion,useInView, useAnimation } from 'framer-motion';

const ServicesSection = () => {
  const ref = useRef(null);
  const isView = useInView(ref,{once:true});
  const controlAnimation = useAnimation();
  useEffect(() => {
    if (isView) {
      controlAnimation.start("visible");
    } else {
      controlAnimation.start("hidden");
    }
  }, [isView]);
  return (
    <div id='services' ref={ref} className='w-full md:px-32 px-8'>
    <main>
    <div className='md:flex md:gap-16 mb-8'>
    <motion.div
    variants={{
          hidden: { y: "100vw", opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
    >
    <h1 className='md:mb-6'>Services</h1>
    <p className='mb-2'><span className='font-semibold'>Mr. Snow Removal</span> offers Markham residents two options: <span className='font-semibold'>Seasonal and Pay-Per-Visit services.</span> </p>



<p className='mb-2'>Our very exclusive <span className='font-semibold'>Seasonal</span> clients receive the VIP treatment. We have a limited number of spots each year to give them the best service. Once we're full, we focus on these clients for the season and we cease taking on additional clients to ensure a focused commitment to our seasonal customers. Seasonal service is for those who want a worry-free winter. The contract starts on November 1 and ends on March 31, giving you 5 months of snow coverage. </p>



<p className='mb-2'><span className='font-bold'>Pay-Per-Visit Services</span> work for those who don't want a long-term deal and cater to sporadic needs. You can call us when you need your snow cleared and our Pay-Per-Visit Team will be happy to help!</p>
<p>
Both options include FREE salt spreading (you provide the salt).</p>
    </motion.div>
    
    </div>

    <div className='md:grid md:grid-cols-2 gap-8 md:w-full mb-12'>
    <motion.div
    variants={{
          hidden: { y: "100vw", opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
        className='mb-4 md:mb-0'
    >
      <h2>OUR GUARANTEE</h2>
      <ul>
        <li className='mb-2 flex items-baseline gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900'>24/7 Availability:</span> Count on us round the clock, from November 1st to March 31.</span></li>
        <li className='mb-2 flex items-baseline gap-3 text-gray-700'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900'>Limited Exclusive Spots:</span> Our Seasonal service features fully serviced, flat-rate contracts with a cap on client intake. When we sell out of spots we don't take on more clients so we can ensure hight-quality service for our seasonal clients.</span></li>
        <li className='mb-2 flex items-baseline gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900'>Effective Snow Clearance:</span> We clear snow measuring 3cm or more using plows and high-powered snow blowers, combined with the use of plastic shovels to prevent property damage.</span></li>
        <li className='mb-2 flex items-baseline gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900'>Customized Planning:</span> Your residence is cleared according to your specifications, providing you with a personalized experience.</span></li>
        <li className='mb-2 flex items-baseline gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900'>FREE Salt Spreading:</span> We offer complimentary salt spreading (with salt provided by customer) to enhance safety.</span></li>
        <li className='mb-2 flex items-baseline gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900'>Excellent Customer Service:</span> We pride ourselves on providing top-quality customer service.</span></li>
        <li className='flex items-baseline gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900'>Quick Response Time:</span> Expect a rapid response when you need us.</span></li>
      </ul>
    </motion.div>
    <motion.div
    variants={{
          hidden: { y: "100vw", opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
    >
    <h2>SERVICE AREA</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92025.57817750126!2d-79.38211102261634!3d43.880709372589635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d5efa0324ca9%3A0xf73d52812cb23d63!2sMarkham%2C%20ON%2C%20Canada!5e0!3m2!1sen!2slk!4v1692888048100!5m2!1sen!2slk" width="100%" height="90%" style={{border:'8px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </motion.div>
    </div>
    
    </main>
    </div>
  )
}

export default ServicesSection
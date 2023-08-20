"use client";
import React,{ useEffect, useState,useRef } from 'react';
import Image from 'next/image';
import rateImg1 from '../../../public/assets/images/rates1.png';
import rateImg2 from '../../../public/assets/images/rates2.png';
import rateImg3 from '../../../public/assets/images/rates3.png'
import { LiaGreaterThanSolid } from "react-icons/lia";
import { BiSolidRightArrowCircle} from "react-icons/bi";
import {motion,useInView, useAnimation } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const RatesSection = () => {
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

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);
  return (
    <div ref={ref} id='rates' className=' w-full md:px-32 px-8 bg-[#DAF3F4] py-12'>
    <h2 className='text-center'>Rates</h2>
    <motion.main
    variants={{
          hidden: { x: "-100vw", opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
     className='md:grid md:grid-cols-2 mb-8 flex flex-col gap-8'>
     <form action="/api/checkout/1" method="POST">
      <button type='submit' role='link'><Image src={rateImg1} width={'500'} alt=''  /></button>
      </form>

      <form action="/api/checkout/2" method="POST">
      <button type='submit' role='link'><Image src={rateImg2} width={'500'} alt='' className='justify-self-end'/></button>
      </form>
    </motion.main>

    <motion.main
    variants={{
          hidden: { x: "100vw", opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
     className='md:grid md:grid-cols-2 md:gap-8'>
     <form action="/api/checkout/4" method="POST">
      <button type='submit' role='link'><Image src={rateImg3} width={'500'} alt=''/></button>
      </form>
      <ul className='justify-self-end mt-8 max-w-lg self-center'>
      <li className='mb-4 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>Seasonal contracts include the driveway, walkway and front steps/porch. Sidewalks are an additional charge.</span></li>
      <li className='mb-4 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>P-P-V pricing is PER VISIT and includes the driveway, walkway, sidewalk & front steps/porch.</span></li>
      <li className='mb-4 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>Driveways with municipal boulevards will be charged as full driveways.</span></li>
      <li className='mb-4 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>Price adjustments will be made for excessive walkways, sidewalks and/or additional property clearance.</span></li>
      <li className='mb-4 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>Customer provided salt will be spread free of charge.</span></li>
      <li className='mb-4 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>Listed prices DO NOT include tax.</span></li>
      </ul>
    </motion.main>
    </div>
  )
}

export default RatesSection
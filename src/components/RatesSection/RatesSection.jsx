"use client";
import React,{ useEffect, useState,useRef } from 'react';
import Image from 'next/image';
import rateImg1 from '../../../public/assets/images/rates1.jpg';
import rateImg2 from '../../../public/assets/images/rates2.jpg';
import rateImg3 from '../../../public/assets/images/rates3.jpg'
import { LiaGreaterThanSolid } from "react-icons/lia";
import { BiSolidRightArrowCircle} from "react-icons/bi";
import {motion,useInView, useAnimation } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import CustomRates from './CustomRates';
import Payment from './Payment';

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
      console.log('Order canceled -- continue to shop around and checkout when you\'re ready.');
    }
  }, []);
  return (
    <div ref={ref} id='rates' className='w-full md:px-32 px-8 bg-[#DAF3F4] py-12'>
    <h2 className='text-center'>Rates</h2>
    <div className='md:grid md:grid-cols-2 gap-28'>
    <motion.main
    variants={{
          hidden: { y: "100vw", opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
     className='mb-8'>
     <form action="/api/checkout/1" method="POST">
      <button type='submit' role='link'><Image src={rateImg1} width={'500'} alt=''  /></button>
      </form>

      <form action="/api/checkout/2" method="POST">
      <button type='submit' role='link' ><Image src={rateImg2} width={'500'} alt='' /></button>
      </form>
    </motion.main>

    <motion.main
    variants={{
          hidden: { y: "100vw", opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
     className='mb-8'>
     <form action="/api/checkout/4" method="POST">
     <button type='submit' role='link' ><Image src={rateImg3} width={'500'} alt='' /></button>

      </form>
      <ul className='max-w-lg justify-self-end'>
      <li className='mb-4 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>For Seasonal Contracts : Our seasonal contracts encompass the driveway, walkway, and front steps/porch. Additional charges apply for sidewalks and boulder's.</span></li>
      <li className='mb-4 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>For Pay-Per-Visit (P-P-V) Pricing : P-P-V pricing is calculated per visit and includes the driveway, walkway, sidewalk, boulder's and front steps/porch.</span></li>
      <li className='mb-4 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>Regarding Driveways with Municipal Boulevards : Driveways featuring municipal boulevards will be billed according to their size.</span></li>
      <li className='mb-4 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>Flexibility in Pricing : We understand that some properties may have more extensive walkways, sidewalks, or require extra clearance. In such cases, price adjustments will be applied accordingly. The illustrations and pricing is subject to change per property.</span></li>
      <li className='mb-4 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>Free Salt Spreading : Rest assured, if you provide your salt, we'll distribute it at no extra cost.</span></li>
      <li className='mb-4 flex items-baseline font-medium gap-3'><span><BiSolidRightArrowCircle/></span><span>Tax Information : Please note that the prices listed exclude taxes.</span></li>
      </ul>
    </motion.main>
    <CustomRates />
    <Payment />
    </div>
    </div>
  )
}

export default RatesSection
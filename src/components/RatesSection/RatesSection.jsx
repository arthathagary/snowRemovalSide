"use client";
import React,{ useEffect, useState,useRef } from 'react';
import Image from 'next/image';
import rateImg1 from '../../../public/assets/images/rates1.webp';
import rateImg2 from '../../../public/assets/images/rates2.webp';
import rateImg3 from '../../../public/assets/images/rates3.webp'
import { LiaGreaterThanSolid } from "react-icons/lia";
// import { BiSolidRightArrowCircle} from "react-icons/bi";
import { MdStars } from "react-icons/md";
import {motion,useInView, useAnimation } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import CustomRates from './CustomRates';
import Payment from './Payment';
import Popup from '../Popups/Popup';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const RatesSection = () => {

  const [popup,setPopup] = useState(false)

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
    <div className=''>
    <motion.main
    variants={{
          hidden: { y: "100vw", opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
     className='mb-8 md:flex md:gap-12'>
     

  <section class="mx-auto w-fit">
  <div class="w-full h-fit group">
    <div class="relative overflow-hidden">
      <Image class="h-full w-full object-cover" src={rateImg1} alt=""/>
      <div class="absolute h-full w-full bg-black/20 flex flex-col gap-4 items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
        <button class="text-black bg-white py-2 px-5">Car driveaway only($500)</button>
        <button class="text-black bg-white py-2 px-5">With Sidewalk($650)</button>
        <button class="text-black bg-white py-2 px-5">With Boulder($650)</button>
        <button class="text-black bg-white py-2 px-5">With Sidewalk & Boulder($800)</button>
      </div>
    </div>
  </div>
</section>

<section class="mx-auto w-fit">
  <div class="w-full h-fit group">
    <div class="relative overflow-hidden">
      <Image class="h-full w-full object-cover" src={rateImg2} alt=""/>
      <div class="absolute h-full w-full bg-black/20 flex flex-col gap-4 items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
      <button class="text-black bg-white py-2 px-5">Car driveaway only($600)</button>
        <button class="text-black bg-white py-2 px-5">With Sidewalk($750)</button>
        <button class="text-black bg-white py-2 px-5">With Boulder($850)</button>
        <button class="text-black bg-white py-2 px-5">With Sidewalk & Boulder($1000)</button>
      </div>
    </div>
  </div>
</section>

<section class="mx-auto w-fit ">
  <div class="w-full h-fit group">
    <div class="relative overflow-hidden">
      <Image class="h-full w-full object-cover" src={rateImg3} alt=""/>
      <div class="absolute h-full w-full bg-black/20 flex flex-col gap-4 items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
      <button class="text-black bg-white py-2 px-5">Car driveaway only($800)</button>
        <button class="text-black bg-white py-2 px-5">With Sidewalk($950)</button>
        <button class="text-black bg-white py-2 px-5">With Boulder($1050)</button>
        <button class="text-black bg-white py-2 px-5">With Sidewalk & Boulder($1200)</button>
      </div>
    </div>
  </div>
</section>


     {/* <form action="/api/checkout/1" method="POST">
      <button type='submit' role='link'><Image src={rateImg1} width={400} alt=''  /></button>
      </form>

      <form action="/api/checkout/2" method="POST">
      <button type='submit' role='link' ><Image src={rateImg2} width={400} alt='' /></button>
      </form>
      <form action="/api/checkout/4" method="POST">
     <button type='submit' role='link' ><Image src={rateImg3} width={400} alt='' /></button>

      </form> */}
    </motion.main>

    <motion.main
    variants={{
          hidden: { y: "100vw", opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
     className='mb-8 md:flex gap-12'>
     <div className='md:w-[50%]'>
      <CustomRates />
      </div>
      <div className='md:w-[50%]'>
      <Payment />
      </div>
    </motion.main>
    <div>
    <ul className=''>
      <li className='mb-2 flex items-baseline text-gray-700 gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900 block'>For Seasonal Contracts :</span> Our seasonal contracts encompass the driveway, walkway, and front steps/porch. Additional charges apply for sidewalks and boulder's.</span></li>
      <li className='mb-2 flex items-baseline text-gray-700 gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900 block'>For Pay-Per-Visit (P-P-V) Pricing :</span> P-P-V pricing is calculated per visit and includes the driveway, walkway, sidewalk, boulder's and front steps/porch.</span></li>
      <li className='mb-2 flex items-baseline text-gray-700  gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900 block'>Regarding Driveways with Municipal Boulevards :</span> Driveways featuring municipal boulevards will be billed according to their size.</span></li>
      <li className='mb-2 flex items-baseline text-gray-700  gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900 block'>Flexibility in Pricing :</span> We understand that some properties may have more extensive walkways, sidewalks, or require extra clearance. In such cases, price adjustments will be applied accordingly. The illustrations and pricing is subject to change per property.</span></li>
      <li className='mb-2 flex items-baseline text-gray-700  gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900 block'>Free Salt Spreading :</span> Rest assured, if you provide your salt, we'll distribute it at no extra cost.</span></li>
      <li className='mb-2 flex items-baseline text-gray-700  gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900 block'>Tax Information :</span> Please note that the prices listed exclude taxes.</span></li>
      </ul>

      <h3 className='text-gray-900 font-semibold mt-8'>Contact us for a custom quote for larger properties.</h3>
      </div>
    
    
    </div>
    <Popup isVisible={popup}/>
    </div>
  )
}

export default RatesSection
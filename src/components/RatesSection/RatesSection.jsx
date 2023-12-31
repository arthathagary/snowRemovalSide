"use client";
import React,{ useEffect, useState,useRef } from 'react';
import Image from 'next/image';
import rateImg1 from '../../../public/assets/images/rates1.webp';
import rateImg2 from '../../../public/assets/images/rates2.webp';
import rateImg3 from '../../../public/assets/images/rates3.webp'
import { LiaGreaterThanSolid } from "react-icons/lia";
import PopupForm from '../Forms/PopupForm';
import { MdStars } from "react-icons/md";
import {motion,useInView, useAnimation } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import CustomRates from './CustomRates';
import Payment from './Payment';
import Popup from '../Popups/Popup';
import axios from 'axios';
import getStripe from '../../../lib/get-stripe';



const RatesSection = () => {


  const [popup,setPopup] = useState(false)
  const [item, setItem] = useState({
    name: "Car Driveaway",
    description: "Remove Snows based on car driveaway price",
    quantity: 1,
    price: 0,
    numOfDriveaway: 0,
  });

  

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

  const handleImgClick = (e)=>{
    
    let btnId = e.target.id
    let btnIdInt = parseInt(btnId)
    switch (btnId) {
      case 1:
        setItem({ ...item, price: 800, numOfDriveaway: 1 });
        
        break;
      case 2:
        setItem({ ...item, price: 1000, numOfDriveaway: 2 });
        
        break;  
      case 3:
        setItem({ ...item, price: 1200, numOfDriveaway: 4 });
      
        break; 
      default:
        break;
  }
}

const handleButtonClick = (e) => {
  const id = e.target.id;
  const idInInt = parseInt(id)
  setPopup(true); // Set the popup to true
  handleImgClick({ target: { id: idInInt } }); // Trigger handleImgClick with an event object containing the id '2'
};

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      // console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      // console.log('Order canceled -- continue to shop around and checkout when you\'re ready.');
    }
  }, []);


  const createCheckOut = async () => {
    const stripePromise = getStripe();
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create-checkout", {
      item,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      console.log(result.error.message);
    }
  };
  return (
    <div ref={ref} id='rates' className='w-full lg:px-32 px-8 bg-[#DAF3F4] py-12 md:-scroll-my-[35rem] -scroll-my-[1400px]'>
    <h1>Rates</h1>
    <div className=''>
    <motion.main
    variants={{
          hidden: { y: "100vw", opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
     className='mb-12 lg:grid lg:grid-cols-3 gap-8'>
     

  <section
  
  >
  
      <Image className="h-full w-full rounded-xl" src={rateImg1} alt=""/>
 
</section>

<section
 
>
  
      <Image className="h-full w-full rounded-xl" src={rateImg2} alt=""/>
  
   
</section>

<section

>
  
      <Image className="h-full w-full rounded-xl" src={rateImg3} alt=""/>
      
    
</section>
    </motion.main>

    <motion.main
    variants={{
          hidden: { y: "100vw", opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
     className='mb-8 lg:grid lg:grid-cols-5 gap-x-16' >
     <div  className='col-span-2'>
     <div className='mb-4'>
      <CustomRates />
      </div>
      <div className=''>
      <Payment />
      </div>
      </div>
      <div className='col-span-3'>
    <ul className=''>
      <li className='mb-6 flex items-baseline text-gray-700 gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900 pt-6'>For Seasonal Contracts:</span> Our seasonal contracts encompass the driveway, walkway, and front steps/porch. Additional charges apply for sidewalks and boulevards. To book a Seasonal Contract you can use our Online Select Package Tool or call us at <span className='font-semibold text-gray-800'>416-420-8000</span></span></li>
      <li className='mb-6 flex items-baseline text-gray-700 gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900'>For Pay-Per-Visit Pricing:</span> Pay-Per-Visit pricing is calculated per visit and includes the driveway, walkway, sidewalk, boulder's and front steps/porch. Call us  at  <span className='font-semibold text-gray-800'>416-420-8000</span> for a custom quote.</span></li>
      <li className='mb-6 flex items-baseline text-gray-700  gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900'>Regarding Driveways with Municipal Boulevards:</span> Driveways featuring municipal boulevards will be billed according to their size.</span></li>
      <li className='mb-6 flex items-baseline text-gray-700  gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900'>Flexibility in Pricing:</span> We understand that some properties may have more extensive walkways, sidewalks, or require extra clearance. In such cases, price adjustments will be applied accordingly. The illustrations and pricing is subject to change per property.</span></li>
      <li className='mb-6 flex items-baseline text-gray-700  gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900'>Free Salt Spreading:</span> Rest assured, if you provide your salt, we'll distribute it at no extra cost.</span></li>
      <li className='mb-6 flex items-baseline text-gray-700  gap-3'><span><MdStars color='black'/></span><span><span className='font-semibold text-gray-900'>Tax Information:</span> Please note that the prices listed exclude taxes.</span></li>
      </ul>

      <h3 className='text-gray-900 font-semibold mt-10 text-xl'>Contact us for a custom quote for larger properties.</h3>
      </div>
    </motion.main>
    
    
    
    </div>
    <Popup isVisible={popup} onClose={()=>setPopup(false)}> 
        <PopupForm typeOfForm="text" formTitle="Name" formName="name"/>
        <PopupForm typeOfForm="text" formTitle="Address Line 1" formName="addressLine1"/>
        <PopupForm typeOfForm="text" formTitle="Address Line 2" formName="addressLine2"/>
        <PopupForm typeOfForm="text" formTitle="Phone Number" formName="phonenumber"/>
        <PopupForm typeOfForm="email" formTitle="Email Address" formName="email"/>
        <label>Addtional Notes</label>
        <textarea className="w-full border-gray-300 border-2 h-32"/>
        <div className='mb-3 flex gap-4 justify-end mt-2'>
        <label>I accept all terms & conditions</label>
        <input type='checkbox'/>
        </div>
     
                
        <button onClick={createCheckOut} className="bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded place-self-end">Proceed</button>
         </Popup>
    </div>
  )
}

export default RatesSection
"use client";
import React,{useState} from 'react';
import Image from 'next/image';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Popup from '../Popups/Popup';
import PopupForm from '../Forms/PopupForm';
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
console.log(publishableKey);
const stripePromise = loadStripe(publishableKey);



  
const Payment = () => {
  const [popup,setPopup] = useState(false)
    const [item, setItem] = useState({
        name: 'Car Driveaway',
        description: 'Remove Snows based on car driveaway price',
        quantity: 1,
        price: '',
      });

      // const changeQuantity = (value) => {
      //   // Don't allow the quantity less than 0, if the quantity is greater than value entered by user then the user entered quantity is used, else 0
      //   setItem({ ...item, quantity: Math.max(0, value) });
      // };
      


    const onInputChange = (e) => {
      const inputValue = e.target.value;
      const parsedValue = parseInt(inputValue);
    
      if (!isNaN(parsedValue)) {
        setItem({ ...item, price: parsedValue });
      } else {
        console.log("error");
      }
    };


    // new

    

 


    const createCheckOutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post('/api/create-checkout', {
      item,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };
  return (
    <main>
  <div className=' h-full rounded-lg shadow bg-white  mb-2 md:mb-0 flex flex-col justify-center items-center py-6  sm:rounded-3xl sm:p-8 bg-clip-padding bg-opacity-60 border border-gray-200 backdrop-blur-3xl'>
    <h3 className='text-xl text-gray-800 font-semibold mb-3'>Custom Payment</h3>
    <p className='text-gray-800 mb-3'>Contact us for a custom quote for larger properties.</p>
    <p className='text-sm text-gray-800 mt-1 mb-3'>Enter Amount:</p>
    <div className='border rounded mb-3'>
    
      <input
        type='number'
        className='p-2 border border-gray-800 rounded-lg'
        onChange={onInputChange}
        value={item.price}
      />
     
    </div>
    <button
      disabled={item.price === 0}
      onClick={()=>setPopup(true)}
      className='disabled:cursor-not-allowed disabled:bg-blue-100 border border-gray-800 px-4 py-2 mb-3 text-gray-800 hover:bg-gray-800 hover:text-white'
    >
      Checkout
    </button>
  </div>
  <Popup isVisible={popup} onClose={()=>setPopup(false)}> 
        <PopupForm typeOfForm="text" formTitle="Name" formName="name"/>
        <PopupForm typeOfForm="text" formTitle="Address Line 1" formName="addressLine1"/>
        <PopupForm typeOfForm="text" formTitle="Address Line 2" formName="addressLine2"/>
        <PopupForm typeOfForm="text" formTitle="Phone Number" formName="phonenumber"/>
        <label>Addtional Notes</label>
        <textarea className="w-full border-gray-300 border-2 h-32"/>
        
        
                
        <button onClick={createCheckOutSession} className="bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded place-self-end">Proceed</button>
         </Popup>
</main>
  )
}

export default Payment
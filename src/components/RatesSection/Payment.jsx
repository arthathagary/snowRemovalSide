"use client";
import React,{useState} from 'react';
import Image from 'next/image';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
console.log(publishableKey);
const stripePromise = loadStripe(publishableKey);



  
const Payment = () => {
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
  <div className='w-full border rounded-lg shadow bg-white border-gray-700 mb-2 md:mb-0 flex flex-col justify-center items-center md:h-96 py-6'>
    <h3 className='text-xl text-gray-800 font-semibold mb-3'>{item.name}</h3>
    <p className='text-gray-800 mb-3'>{item.description}</p>
    <p className='text-sm text-gray-800 mt-1 mb-3'>Enter Amount:</p>
    <div className='border rounded mb-3'>
    
      <input
        type='number'
        className='p-2 border border-gray-800'
        onChange={onInputChange}
        value={item.price}
      />
     
    </div>
    <button
      disabled={item.price === 0}
      onClick={createCheckOutSession}
      className='disabled:cursor-not-allowed disabled:bg-blue-100 border border-gray-800 px-4 py-2 mb-3 text-gray-800'
    >
      Checkout
    </button>
  </div>
</main>
  )
}

export default Payment
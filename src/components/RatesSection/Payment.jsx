"use client";
import React,{useState} from 'react';
import Image from 'next/image';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Popup from '../Popups/Popup';
import PopupForm from '../Forms/PopupForm';
import Link from 'next/link';
import getStripe from '../../../lib/get-stripe';


  
const Payment = () => {
  const [popup,setPopup] = useState(false)
    const [item, setItem] = useState({
        name: 'Car Driveaway',
        description: 'Remove Snows based on car driveaway price',
        quantity: 1,
        price: '',
      });


    const onInputChange = (e) => {
      const inputValue = e.target.value;
    
      if (inputValue === '' || /^\d+$/.test(inputValue)) {
        setItem({ ...item, price: inputValue });
      } else {
        // console.log("error");
      }
    };


    // new

    

 


    const createCheckOutSession = async (values) => {
    const stripePromise = getStripe();
    const stripe = await stripePromise;
    const checkoutSession = await axios.post('/api/create-checkout', {
      item,
      values,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };

  const handleFormSubmit = (values) => {
    // Perform form data validation here if needed
    // If the form data is valid, call the createCheckOut function
    createCheckOutSession(values);
  };
  return (
    <main>
  <div className='h-full rounded-lg shadow bg-white  mb-2 md:mb-0 flex flex-col justify-center items-center py-6  sm:rounded-3xl sm:p-8 bg-clip-padding bg-opacity-60 border border-gray-200 backdrop-blur-3xl'>
    <h3 className='text-xl text-gray-800 font-semibold mb-3'>Custom Payment</h3>
    <p className='text-gray-800 mb-3'>Contact us for a custom quote</p>
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
        <PopupForm onSubmit={handleFormSubmit}/>
         </Popup>
</main>
  )
}

export default Payment
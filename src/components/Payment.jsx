"use client";
import React,{useState} from 'react';
import Image from 'next/image';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
console.log(publishableKey);
const stripePromise = loadStripe(publishableKey);
import productImg from '../../public/assets/images/rates1.png'



  
const Payment = () => {
    const [item, setItem] = useState({
        name: 'Car Driveaway',
        description: 'Remove Snows based on car driveaway price',
        image:productImg,
        quantity: 0,
        price: 500,
      });

      const changeQuantity = (value) => {
        // Don't allow the quantity less than 0, if the quantity is greater than value entered by user then the user entered quantity is used, else 0
        setItem({ ...item, quantity: Math.max(0, value) });
      };
      
      const onQuantityPlus = () => {
        changeQuantity(item.quantity + 1);
      };
      
      const onQuantityMinus = () => {
        changeQuantity(item.quantity - 1);
      };

      const onInputChange = (e) => {
        changeQuantity(parseInt(e.target.value));
    };

      const createCheckOutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post('/api/create-stripe-session', {
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
        {/* <Image src={item.image} width={300} height={150} alt={item.name} /> */}
  <div className='shadow-lg border rounded p-2 '>
    <h2 className='text-2xl'>$ {item.price}</h2>
    <h3 className='text-xl'>{item.name}</h3>
    <p className='text-gray-500'>{item.description}</p>
    <p className='text-sm text-gray-600 mt-1'>Quantity:</p>
    <div className='border rounded'>
      <button
      onClick={onQuantityMinus}
        className='bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600'
      >
        -
      </button>
      <input
        type='number'
        className='p-2'
        onChange={onInputChange}
        value={item.quantity}
      />
      <button
      onClick={onQuantityPlus}
        className='bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600'
      >
        +
      </button>
    </div>
    <p>Total: ${item.quantity * item.price}</p>
    <button
      disabled={item.quantity === 0}
      onClick={createCheckOutSession}
      className='bg-blue-500 hover:bg-blue-600 text-white block w-full py-2 rounded mt-2 disabled:cursor-not-allowed disabled:bg-blue-100'
    >
      Buy
    </button>
  </div>
</main>
  )
}

export default Payment
"use client";
import React,{useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FailureNotify = () => {
    

    useEffect(() => {
        const notify = () => toast("Payment Failed!"); // Define the notify function
        notify(); // Call the notify function when the component mounts
        console.log("Run Failed try");
      }, []);
    
  return (
    <div>
        <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/>
    </div>
  )
}

export default FailureNotify
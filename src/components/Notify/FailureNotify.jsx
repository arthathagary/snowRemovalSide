"use client";
import React,{useEffect,useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const FailureNotify = () => {
  const router = useRouter();
  let jsonCustomPrice;
  const shouldLog = useRef(true);

  const removeQueryParams = () => {
    const { pathname } = router;
    router.push({ pathname }, undefined, { shallow: true });
  };


      useEffect(() => {
        if(shouldLog.current){
            shouldLog.current = false;
            const notify = () => toast("Payment Failed!"); // Define the notify function
            notify(); // Call the notify function when the component mounts
            const timer = setTimeout(() => {
              removeQueryParams();
            }, 6000); // 6000 milliseconds (6 seconds)
        
            // Clear the timer if the component unmounts before 6 seconds
            return () => clearTimeout(timer);
        }
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
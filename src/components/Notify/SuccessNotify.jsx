"use client";
import React,{useEffect, useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation'
import axios from 'axios'

const SuccessNotify = () => {
    const searchParams = useSearchParams();
    const formDatas = searchParams.get("formdata");
    const jsonFormData = JSON.parse(formDatas);
    const price = searchParams.get("price");
    const jsonPrice = JSON.parse(price);
    const customPrice = searchParams.get("customPrice");
    const jsonCustomPrice = JSON.parse(customPrice);
    const shouldLog = useRef(true);


    useEffect(() => {
        if(shouldLog.current){
            shouldLog.current = false;
            const notify = () => toast("Payment Suceess!"); // Define the notify function
            notify(); // Call the notify function when the component mounts
            console.log("Run inside try");
        if (jsonFormData) {
            const fetchData = async () => {
              try {
                await axios.post('/api/api_four', { formDatas: jsonFormData,price:jsonPrice,customPrice:jsonCustomPrice});
                console.log(formDatas);
              } catch (error) {
                // Handle any errors here
                console.error('Error:', error);
              }
            };
        
            fetchData(); // Call the async function
          }
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

export default SuccessNotify
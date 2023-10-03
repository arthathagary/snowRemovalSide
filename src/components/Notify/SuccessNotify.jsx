"use client";
import React,{useEffect, useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import { useRouter } from 'next/navigation';

const SuccessNotify = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const formDatas = searchParams.get("formdata");
    const jsonFormData = JSON.parse(formDatas);
    const price = searchParams.get("price");
    const jsonPrice = JSON.parse(price);
    const customPrice = searchParams.get("customPrice");
    // const jsonCustomPrice = JSON.parse(customPrice);
    let jsonCustomPrice;

    const shouldLog = useRef(true);


    const removeQueryParams = () => {
      const { pathname } = router;
      router.push({ pathname }, undefined, { shallow: true });
    };

    try {
      jsonCustomPrice = JSON.parse(customPrice);
    } catch (error) {
      jsonCustomPrice = "Custom Price";
    }

    useEffect(() => {
        if(shouldLog.current){
            shouldLog.current = false;
            const notify = () => toast("Payment Suceess!"); // Define the notify function
            notify(); // Call the notify function when the component mounts
        if (jsonFormData) {
            const fetchData = async () => {
              try {
                const requestData = { formDatas: jsonFormData, price: jsonPrice };
                if (jsonCustomPrice !== undefined) {
                  requestData.customPrice = jsonCustomPrice;
                }
                await axios.post('/api/api_four', requestData);
           
                // await axios.post('/api/api_four', { formDatas: jsonFormData,price:jsonPrice,customPrice:jsonCustomPrice});
                // console.log(formDatas);
              } catch (error) {
                // Handle any errors here
                console.error('Error:', error);
              }
            };
        
            fetchData(); // Call the async function

            const timer = setTimeout(() => {
              removeQueryParams();
            }, 6000); // 6000 milliseconds (6 seconds)
        
            // Clear the timer if the component unmounts before 6 seconds
            return () => clearTimeout(timer);
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
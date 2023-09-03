import React, { useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import Popup from "../Popups/Popup";
import PopupForm from "../Forms/PopupForm";
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(publishableKey);
import Select from "react-select";
import Link from "next/link";

const CustomRates = () => {
  // const [sideWalkValue, setSideWalkValue] = useState(0);
  // const [boulderValue, setBoulderValue] = useState(0);
  // const [sideWalkPrice, setSideWalkPrice] = useState(0);
  const [value1, setValue1] = useState("0");
  const [value2, setValue2] = useState("0");
  const [value3, setValue3] = useState("0");
  const [popup,setPopup] = useState(false)
  const [customPrice,setCustomPrice] = useState({
    driveway : 0,
    sideWalk : 0,
    boulder :0
  })


  const [item, setItem] = useState({
    name: "Car Driveaway",
    description: "Remove Snows based on car driveaway price",
    quantity: 1,
    price: 0,
    numOfDriveaway: 0,
  });

 

  

  // const handleMainSelect = (e) => {
  //   switch (e.target.value) {
  //     case "0":
  //       setItem({...item,price:0,numOfDriveaway:0})
  //     case "1":
  //       setItem({ ...item, price: 500, numOfDriveaway: 1 });
  //       break;
  //     case "2":
  //       setItem({ ...item, price: 600, numOfDriveaway: 2 });
  //       break;
  //     case "3":
  //       setItem({ ...item, price: 700, numOfDriveaway: 3 });
  //       break;
  //     case "4":
  //       setItem({ ...item, price: 800, numOfDriveaway: 4 });
  //       break;
  //     case "5":
  //       setItem({ ...item, price: 900, numOfDriveaway: 5 });
  //       break;
  //     case "6":
  //       setItem({ ...item, price: 1000, numOfDriveaway: 6 });
  //       break;
  //     case "7":
  //       setItem({ ...item, price: 1100, numOfDriveaway: 7 });
  //       break;
  //     case "8":
  //       setItem({ ...item, price: 1200, numOfDriveaway: 8 });
  //       break;
  //     case "9":
  //       setItem({ ...item, price: 1300, numOfDriveaway: 9 });
  //       break;
  //     case "10":
  //       setItem({ ...item, price: 1400, numOfDriveaway: 10 });
  //       break;
  //   }
  // };

  
  // const handleSideWalk = (e)=>{
  //   e.preventDefault();
  //   let newPrice;
  //   switch(e.target.value){
  //     case "0":
  //       setSideWalkPrice(0)
  //       setItem({...item,price:item.price+0})
  //     case "1":
  //       console.log(e.target.value);
  //       setSideWalkPrice(150);
  //       setItem({...item,price:item.price+150})
  //       break;
  //     case "2":
  //       console.log(e.target.value);
  //       setSideWalkPrice(300);
  //       setItem({...item,price:item.price+300})
  //       break;
  //     case "3":
  //       setSideWalkPrice(450)
  //       setItem({...item,price:item.price+450})
  //       break;
  //     case "4":
  //       setSideWalkPrice(600)
  //       setItem({...item,price:item.price+600})
  //       break;
  //   }
  // }

  const handleDriveway = (e)=>{
    const drivewayValue = e.target.drivewayValue;
    console.log(drivewayValue);
    console.log(typeof(drivewayValue));
    switch (drivewayValue) {
      case "0":
        setCustomPrice({...customPrice,driveway:0})
        break;
      case "1":
        setCustomPrice({...customPrice,driveway:500})
        break;
      case "2":
        setCustomPrice({...customPrice,driveway:600})
        break;
      case "3":
        setCustomPrice({...customPrice,driveway:700})
        break;
      case "4":
        setCustomPrice({...customPrice,driveway:800})
        break;
      case "5":
        setCustomPrice({...customPrice,driveway:900})
        break;
      case "6":
        setCustomPrice({...customPrice,driveway:1000})
        break;
      case "7":
        setCustomPrice({...customPrice,driveway:1100})
        break;
      case "8":
        setCustomPrice({...customPrice,driveway:1200})
        break;
      case "9":
        setCustomPrice({...customPrice,driveway:1300})
        break;
       case "10":
        setCustomPrice({...customPrice,driveway:1400})
        break;
      default:
        break;
    }
  }

  const handleSideWalk = (e)=>{
    const sideWalkValue = e.target.sideWalkValue;
    console.log(sideWalkValue);
    console.log(typeof(sideWalkValue));
    switch (sideWalkValue) {
      case "0":
        setCustomPrice({...customPrice,sideWalk:0})
        break;
      case "1":
        setCustomPrice({...customPrice,sideWalk:150})
        break;
      case "2":
        setCustomPrice({...customPrice,sideWalk:300})
        break;
      case "3":
        setCustomPrice({...customPrice,sideWalk:450})
        break;
      case "4":
        setCustomPrice({...customPrice,sideWalk:600})
        break;
      default:
        break;
    }
  }

  const handleBoulder = (e)=>{
    const boulderValue = e.target.boulderValue;
    console.log(boulderValue);
    console.log(typeof(boulderValue));
    switch (boulderValue) {
      case "0":
        setCustomPrice({...customPrice,boulder:0})
        break;
      case "1":
        setCustomPrice({...customPrice,boulder:150})
        break;
      case "2":
        setCustomPrice({...customPrice,boulder:300})
        break;
      default:
        break;
    }
  }
  const handleDrivewayClick = (e)=>{
    setValue1(e.target.value);
    handleDriveway({ target: { drivewayValue: e.target.value } });
  }
  const handleBoulderClick = (e)=>{
    setValue3(e.target.value);
    handleBoulder({ target: { boulderValue: e.target.value } });
  }

  const handleSideWalkClick = (e)=>{
    setValue2(e.target.value);
    handleSideWalk({ target: { sideWalkValue: e.target.value } });
  }
const total = customPrice.driveway+customPrice.sideWalk+customPrice.boulder;

const handleButtonClick = (e) => {
  setPopup(true); // Set the popup to true
  setItem({...item,price:total}) // Trigger handleImgClick with an event object containing the id '2'
};



  const createCheckOut = async (e) => {
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
    <>
    <main className="border rounded-2xl shadow bg-gray-600 border-gray-700 mb-2 md:mb-0 flex flex-col justify-center px-8 backdrop-blur-xl">
        <div className="mb-3 py-6">
          <h4 className="text-white font-semibold text-center text-xl mb-3">
          Select Package
          </h4>

          {/* -------- Driveway price details Start----------- */}
          <div className="flex justify-between items-center">
          <label className="text-white">Driveway Size (select)</label>
          <select value={value1} onChange={handleDrivewayClick} name="driveaway" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-white block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-28">
            <option value="0">0</option>
            <option value="1">1 ($500)</option>
            <option value="2">2 ($600)</option>
            <option value="3">3 ($700)</option>
            <option value="4">4 ($800)</option>
            <option value="5">5 ($900)</option>
            <option value="6">6 ($1000)</option>
            <option value="7">7 ($1100)</option>
            <option value="8">8 ($1200)</option>
            <option value="9">9 ($1300)</option>
            <option value="10">10 ($1400)</option>
          </select>
          </div>
          {/* -------- Driveway price details End----------- */}
        </div>

        <div className="mb-3">
        {/* -------- SideWalk price details Start----------- */}
        <div className="flex justify-between items-baseline">
        <label className="text-white">Number of Sidewalks (select)</label>
          <select value={value2} onChange={handleSideWalkClick} name="sidewalk" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6 w-28">
            <option value="0">0</option>
            <option value="1">1 ($150)</option>
            <option value="2">2 ($300)</option>
            <option value="3">3 ($450)</option>
            <option value="4">4 ($600)</option>
          </select>
          </div>
           {/* -------- SideWalk price details End----------- */}

            {/* -------- Boulders price details Start----------- */}
          <div className="flex justify-between items-baseline">
        <label className="text-white">Number of Boulders (select)</label>
          <select value={value3} onChange={handleBoulderClick} name="boulder" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6 w-28">
            <option value="0">0</option>
            <option value="1">1 ($150)</option>
            <option value="2">2 ($300)</option>
          </select>
          </div>
          {/* -------- Boulders price details End----------- */}
   
          
        </div>
        {/* -------- Show Total Price details Start----------- */}
        <h3 className="text-white font-medium mb-3 self-center">
          Total Amount is: {total} CAD
        </h3>
         {/* -------- Show Total Price details End----------- */}
        <div className="mb-3 self-center">
          <button
            className="border border-white text-white px-4 py-2 hover:bg-[white] hover:text-gray-700"
            // onClick={createCheckOut}
            onClick={handleButtonClick}
          >
            Checkout
          </button>
        </div>
        
    </main>
    <Popup isVisible={popup} onClose={()=>setPopup(false)}> 
        <PopupForm typeOfForm="text" formTitle="Name" formName="name"/>
        <PopupForm typeOfForm="text" formTitle="Address Line 1" formName="addressLine1"/>
        <PopupForm typeOfForm="text" formTitle="Address Line 2" formName="addressLine2"/>
        <PopupForm typeOfForm="text" formTitle="Phone Number" formName="phonenumber"/>
        <PopupForm typeOfForm="email" formTitle="Email Address" formName="email"/>
        <PopupForm typeOfForm="text" formTitle="Additional Notes" formName="Additionalnotes"/>
        <div className='mb-3 flex gap-4 justify-end mt-2'>
        <label>I accept all <Link href="/">terms & conditions</Link></label>
        <input type='checkbox'/>
        </div>
        
                
        <button onClick={createCheckOut} className="bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded place-self-end">Proceed</button>
         </Popup>
    </>
  );
};

export default CustomRates;

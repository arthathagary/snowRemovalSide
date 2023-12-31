import React, { useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import Popup from "../Popups/Popup";
import PopupForm from "../Forms/PopupForm";
import getStripe from "../../../lib/get-stripe";
import { useRouter } from "next/navigation";



const CustomRates = (props) => {
  const router = useRouter();
  const [value1, setValue1] = useState("0");
  const [value2, setValue2] = useState("0");
  const [value3, setValue3] = useState("0");
  const [popup,setPopup] = useState(false)
  const [customPrice,setCustomPrice] = useState({
    driveway : 0,
    sideWalk : 0,
    boulder :0,
    noOfDriveway:0,
    noOfSideWalk:0,
    noOfBoulder:0
  })


  const [item, setItem] = useState({
    name: "Car Driveaway",
    description: "Remove Snows based on car driveaway price",
    quantity: 1,
    price: 0,
    numOfDriveaway: 0,
  });

 

  

 

  const handleDriveway = (e)=>{
    const drivewayValue = e.target.drivewayValue;
    switch (drivewayValue) {
      case "0":
        setCustomPrice({...customPrice,driveway:0, noOfDriveway:0})
        break;
      case "1":
        setCustomPrice({...customPrice,driveway:500, noOfDriveway:1})
        break;
      case "2":
        setCustomPrice({...customPrice,driveway:600, noOfDriveway:2})
        break;
      case "3":
        setCustomPrice({...customPrice,driveway:700, noOfDriveway:3})
        break;
      case "4":
        setCustomPrice({...customPrice,driveway:800, noOfDriveway:4})
        break;
      case "5":
        setCustomPrice({...customPrice,driveway:900, noOfDriveway:5})
        break;
      case "6":
        setCustomPrice({...customPrice,driveway:1000, noOfDriveway:6})
        break;
      case "7":
        setCustomPrice({...customPrice,driveway:1100, noOfDriveway:7})
        break;
      case "8":
        setCustomPrice({...customPrice,driveway:1200, noOfDriveway:8})
        break;
      case "9":
        setCustomPrice({...customPrice,driveway:1300, noOfDriveway:9})
        break;
       case "10":
        setCustomPrice({...customPrice,driveway:1400, noOfDriveway:10})
        break;
      default:
        break;
    }
  }

  const handleSideWalk = (e)=>{
    const sideWalkValue = e.target.sideWalkValue;
    switch (sideWalkValue) {
      case "0":
        setCustomPrice({...customPrice,sideWalk:0, noOfSideWalk:0})
        break;
      case "1":
        setCustomPrice({...customPrice,sideWalk:150, noOfSideWalk:1})
        break;
      case "2":
        setCustomPrice({...customPrice,sideWalk:300, noOfSideWalk:2})
        break;
      case "3":
        setCustomPrice({...customPrice,sideWalk:450, noOfSideWalk:3})
        break;
      case "4":
        setCustomPrice({...customPrice,sideWalk:600, noOfSideWalk:4})
        break;
      default:
        break;
    }
  }

  const handleBoulder = (e)=>{
    const boulderValue = e.target.boulderValue;
    switch (boulderValue) {
      case "0":
        setCustomPrice({...customPrice,boulder:0, noOfBoulder:0})
        break;
      case "1":
        setCustomPrice({...customPrice,boulder:150, noOfBoulder:1})
        break;
      case "2":
        setCustomPrice({...customPrice,boulder:250, noOfBoulder:2})
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
  setItem({...item,price:total}) 
};



  const createCheckOut = async (values) => {
    const stripePromise = getStripe();
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create-checkout", {
      item,
      values,
      customPrice
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    
    if (result.error) {
      console.log(result.error.message);
    }
  };

  const handleFormSubmit = (values) => {
    
    
    // Perform form data validation here if needed
    // If the form data is valid, call the createCheckOut function
    
    
    
    createCheckOut(values);
   
  };
  return (
    <>
    <main className="border rounded-2xl shadow bg-gray-600 border-gray-700 mb-2 md:mb-0 flex flex-col justify-center px-8 backdrop-blur-xl">
        <div className="mb-3 py-6">
          <h4 className="text-white font-semibold text-center text-xl ">
          Select Package
          </h4>
          <h4 className="text-white text-center mb-3">(For Seasonal Contracts)</h4>

          {/* -------- Driveway price details Start----------- */}
          <div className="flex justify-between items-center">
          <label className="text-white">Driveway Size <span className="block text-xs text-center">(select)</span> </label>
          <select value={value1} onChange={handleDrivewayClick} name="driveaway" className="border text-sm rounded-lg   block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 mb-6 w-24">
            <option value="0">0</option>
            <option  value="1">1 ($500)</option>
            <option  value="2">2 ($600)</option>
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
        <label className="text-white">Number of Sidewalks <span className="block text-xs text-center">(select)</span></label>
          <select value={value2} onChange={handleSideWalkClick} name="sidewalk" className="border  text-sm rounded-lg   block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 mb-6 w-24">
            <option value="0">0</option>
            <option value="1">1 ($150)</option>
            <option value="2">2 ($300)</option>
            <option value="3">3 ($450)</option>
            <option value="4">4 ($600)</option>
          </select>
          </div>
           {/* -------- SideWalk price details End----------- */}

            {/* -------- boulevards price details Start----------- */}
          <div className="flex justify-between items-baseline">
        <label className="text-white">Number of Boulevards<span className="text-xs text-center  block">(select)</span></label>
          <select value={value3} onChange={handleBoulderClick} name="boulder" className=" border   text-sm rounded-lg   block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 mb-6 w-24">
            <option value="0">0</option>
            <option value="1">1 ($150)</option>
            <option value="2">2 ($250)</option>
          </select>
          </div>
          {/* -------- boulevards price details End----------- */}
   
          
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
        <PopupForm onSubmit={handleFormSubmit}/>
         </Popup>
    </>
  );
};

export default CustomRates;

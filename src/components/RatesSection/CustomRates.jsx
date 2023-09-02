import React, { useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import Popup from "../Popups/Popup";
import PopupForm from "../Forms/PopupForm";
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(publishableKey);

const CustomRates = () => {
  const [select, setSelect] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [sideWalkValue, setSideWalkValue] = useState(0);
  const [boulderValue, setBoulderValue] = useState(0);
  const [sideWalkPrice, setSideWalkPrice] = useState(0);
  const [popup,setPopup] = useState(false)


  const [item, setItem] = useState({
    name: "Car Driveaway",
    description: "Remove Snows based on car driveaway price",
    quantity: 1,
    price: 0,
    numOfDriveaway: 0,
  });

  const handleMainSelect = (e) => {
    switch (e.target.value) {
      case "0":
        setItem({...item,price:0,numOfDriveaway:0})
      case "1":
        setItem({ ...item, price: 500, numOfDriveaway: 1 });
        break;
      case "2":
        setItem({ ...item, price: 600, numOfDriveaway: 2 });
        break;
      case "3":
        setItem({ ...item, price: 700, numOfDriveaway: 3 });
        break;
      case "4":
        setItem({ ...item, price: 800, numOfDriveaway: 4 });
        break;
      case "5":
        setItem({ ...item, price: 900, numOfDriveaway: 5 });
        break;
      case "6":
        setItem({ ...item, price: 1000, numOfDriveaway: 6 });
        break;
      case "7":
        setItem({ ...item, price: 1100, numOfDriveaway: 7 });
        break;
      case "8":
        setItem({ ...item, price: 1200, numOfDriveaway: 8 });
        break;
      case "9":
        setItem({ ...item, price: 1300, numOfDriveaway: 9 });
        break;
      case "10":
        setItem({ ...item, price: 1400, numOfDriveaway: 10 });
        break;
    }
  };

  const handleSidewalkSelect = (e) => {
    const prevSelect = select;
    setSelect(!select);
    let newSideWalkValue;
    let newPrice;
    if (!prevSelect) {
      newSideWalkValue = 150 * item.numOfDriveaway;
      e.target.value = newPrice;
    } else {
      newSideWalkValue = 0 * item.numOfDriveaway;
      e.target.value = newPrice;
    }

    setSideWalkValue(newSideWalkValue);
    newPrice = item.price - (sideWalkValue - newSideWalkValue);
    setItem({ ...item, price: newPrice });
  };

  const handleSideWalk = (e)=>{
    e.preventDefault();
    let newPrice;
    switch(e.target.value){
      case "0":
        setSideWalkPrice(0)
        setItem({...item,price:item.price+0})
      case "1":
        console.log(e.target.value);
        setSideWalkPrice(150);
        setItem({...item,price:item.price+150})
        break;
      case "2":
        console.log(e.target.value);
        setSideWalkPrice(300);
        setItem({...item,price:item.price+300})
        break;
      case "3":
        setSideWalkPrice(450)
        break;
      case "4":
        setSideWalkPrice(600)
        break;
    }
  }



  const handleBoulderSelect = (e) => {
    const prevSelect2 = select2;
    setSelect2(!select2);
    let newBoulderValue;
    let newPrice;
    if (!prevSelect2 == true) {
      newBoulderValue = 250 * item.numOfDriveaway;
      e.target.value = newPrice;
    } else {
      newBoulderValue = 0 * item.numOfDriveaway;
      e.target.value = newPrice;
    }

    setBoulderValue(newBoulderValue);
    newPrice = item.price - (boulderValue - newBoulderValue);
    setItem({ ...item, price: newPrice });
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
    <main className="border rounded-2xl shadow bg-[#4B5D5E] border-gray-700 mb-2 md:mb-0 flex flex-col justify-center px-8 backdrop-blur-xl">
        <div className="mb-3 py-6">
          <h3 className="text-white font-semibold text-center text-xl mb-3">
            Custom Packages
          </h3>
          <div className="flex justify-between items-center">
          <label className="text-white">Select No. of Driveway and Front Porch</label>
          <select  onChange={handleMainSelect} name="driveaway" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-white block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="0" selected>0</option>
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
        </div>

        <div className="mb-3">
        <div className="flex justify-between items-baseline">
        <label className="text-white">Select No. of SideWalk</label>
          <select onChange={handleSideWalk} name="sidewalk" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6">
            <option value="0" selected>0</option>
            <option value="1">1 ($150)</option>
            <option value="2">2 ($300)</option>
            <option value="3">3 ($450)</option>
            <option value="4">4 ($600)</option>
          </select>
          </div>
          {/* <input
            value={sideWalkValue}
            onChange={handleSidewalkSelect}
            type="checkbox"
            name="side"
            defaultValue={select}
          /> */}
          <div className="flex justify-center items-center">
          <label className="text-white mr-3">Boulder</label>
          <input
            value={boulderValue}
            onChange={handleBoulderSelect}
            type="checkbox"
            name="boilder"
            defaultValue={select2}
          />
          </div>
        </div>
        <h3 className="text-white font-medium mb-3 self-center">
          Total Amount is: {item.price} CAD
        </h3>
        <div className="mb-3 self-center">
          <button
            className="border border-white text-white px-4 py-2 hover:bg-[white] hover:text-gray-700"
            // onClick={createCheckOut}
            onClick={()=>setPopup(true)}
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
        <label>Addtional Notes</label>
        <textarea className="w-full border-gray-300 border-2 h-32"/>
        
                
        <button onClick={createCheckOut} className="bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded place-self-end">Proceed</button>
         </Popup>
    </>
  );
};

export default CustomRates;

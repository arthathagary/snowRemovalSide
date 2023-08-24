import React,{useState} from "react";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import axios from "axios";

const CustomRates = () => {
    const [mainSelect,setMainSelect] = useState(0)
    const [select,setSelect] =  useState(true)
    const [select2,setSelect2] =  useState(true)
    const [value,setValue] = useState(0)
    const [value2,setValue2] = useState(0)


    
    //form
    const handleMainSelect = (e)=>{
        if(e.target.value == 1){
            setMainSelect(500)
        }else if(e.target.value == 2){
            setMainSelect(600)
        }else if(e.target.value == 4){
            setMainSelect(800)
        }
    }
    const handleSelect = (e)=>{
        setSelect(!select);
       
        if(select == true){
            e.target.value = setValue(150)
        }else{
            e.target.value = setValue(0)
        }
        console.log(value);
    }

    const handleSelect2 = (e)=>{
        setSelect2(!select2);
        if(select2 == true){
            e.target.value = setValue2(150)
        }else{
            e.target.value = setValue2(0)
        }
        console.log(value2);
    }

    const handleCheckout = (e)=>{
        e.preventDefault();
    }
    //someNew

    

    // const total = mainSelect+value+value2;
    // console.log(total);

  return (
    <>
      <form>
      <div>
      <label>No. of Driveway and Front Porch</label>
        <select onChange={handleMainSelect}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="4">4</option>
        </select>
        </div>
        <div>
        <label>Sidewalk</label>
        <input value={value} type="checkbox" onChange={handleSelect}/>
        <label>Boulder</label>
        <input value={value2} type="checkbox" onChange={handleSelect2}/>
        </div>
        <button onClick={handleCheckout}>Checkout</button>
      </form>
      <div>
        <h1>Display Total</h1>
        <div>The all checked values are {mainSelect} + {value} + {value2} = </div>
      </div>
    </>
  );
};

export default CustomRates;

"use client";
import React,{useEffect,useState} from 'react'
import Image from 'next/image';
import axios from 'axios'
import { BsSunFill,BsSnow2 } from "react-icons/bs";

const WeatherCard = () => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
   };

   const [temperature, setTemperature] = useState("");
   useEffect(() => {
    // Function to fetch temperature data
    const getTemperature = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Markham&appid=21b1921fce82ffcdf76134de36476f3d&units=metric`
        );

        // Extract temperature from the API response and update state
        const temp = response.data.main.temp;
        setTemperature(temp);
      } catch (error) {
        console.error("Error fetching temperature:", error);
      }
    };

    // Call the function to fetch temperature data
    getTemperature();
  }, []);

  return (
    <>
        <div className='bg-white shadow-lg sm:rounded-3xl sm:p-8 bg-clip-padding bg-opacity-60 border border-gray-200 backdrop-blur-none'          >
            <div className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900  py-12 px-6 text-center">
            <h3 className='mb-3 text-xl font-normal'>{new Date().toLocaleDateString('en-US', options)}</h3>
            <h3 className="mb-3 text-xl font-normal">Markham, Ontario, Canada</h3>
            
            <div className="flex justify-center mb-3">{temperature>0?<BsSunFill size={30}/>:<BsSnow2 size={30}/>}</div>
            {temperature ? <h3>{`${temperature} °C`}</h3> : <h3>Loading...</h3>}
            
            </div>
            <h3 className="font-normal text-gray-700 dark:text-gray-400">
            {/* <p>Current Date with Year: {currentDate.toDateString()}</p> */}
            </h3>
            
          </div>
    </>
  )
}

export default WeatherCard



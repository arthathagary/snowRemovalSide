"use client";
import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import heroContents from "./heroContent";
import HeroCard from "./HeroCard";
import Image from 'next/image';
import sunGif from '../../../public/assets/gifs/sun.gif';
import {motion,useInView, useAnimation } from 'framer-motion';

const HeroSection = () => {
  const ref = useRef(null);
  const isView = useInView(ref,{once:true});
  const controlAnimation = useAnimation();
  useEffect(() => {
    if (isView) {
      controlAnimation.start("visible");
    } else {
      controlAnimation.start("hidden");
    }
  }, [isView]);
  const [temperature, setTemperature] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(null);
  useEffect(() => {
    // Function to fetch temperature data
    const getTemperature = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Oshawa&appid=21b1921fce82ffcdf76134de36476f3d&units=metric`
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

  useEffect(() => {
    // Function to update the current time every second
    const updateTime = () => {
      setCurrentTime(new Date());
      setCurrentDate(new Date().getDay())
    };

    // Call the updateTime function every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <main ref={ref} id="home" className="w-full md:px-32 px-8 bg-[#C5DFF8] py-8">
      <h1 className="text-center">FULLY BOOKED FOR THE 2022-2023 SEASON </h1>

      {/* <p>{currentTime.toLocaleTimeString()}</p> */}

      <hr className="w-full h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <div className="md:flex justify-between w-full gap-16">
        <div className="md:w-[60%]">
          <div className="mb-4">
            <h2 className="font-bold text-xl">WELCOME</h2>
            <p>To The Official Home of Mr. Snow-It-All</p>
          </div>

          <p className="mb-4">
            <span className="font-bold">Mr. Snow-It-All</span> is an affordable
            and customer friendly way to keep your residence snow & ice free
            this winter. Servicing the Durham Region for over 10 years, we focus
            STRICTLY on residential snow removal. This means the home owner
            always come first.
          </p>

          <p className="mb-4">
            With our seasonal services beginning November 1st and continuing
            through March 31, your property will be snow free for the entire
            winter. Why risk being buried in snow? It's time for you to enjoy
            winter and leave the labour to us.
          </p>

          <p>
            <span className="font-bold">Call Mr. Snow-It-All</span> today and
            let us give you a hand! <span className="text-2xl font-bold">905 922 4888</span>
          </p>
        </div>
        <motion.div
        variants={{
          hidden: { x: "100vw", opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
        >
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-2 md:my-0"
          >
            <div class="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Oshawa, Ontario, Canada</p>
            <Image src={sunGif} width={'100px'} height={'100px'} alt=""/>
            {temperature ? <p>{`${temperature} °C`}</p> : <p>Loading...</p>}
            </div>
            <p class="font-normal text-gray-700 dark:text-gray-400">
            {/* <p>Current Date with Year: {currentDate.toDateString()}</p> */}
            </p>
            
          </a>

         
        </motion.div>
      </div>

<motion.div
variants={{
          hidden: { x: "-100vw", opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
 className="md:grid lg:grid-cols-4 md:grid-cols-2 gap-8">
{heroContents.map((heroContent)=>{
  return <HeroCard key={heroContent.id} title={heroContent.title} content={heroContent.content}/>
})}
</motion.div>
    </main>
  );
};

export default HeroSection;

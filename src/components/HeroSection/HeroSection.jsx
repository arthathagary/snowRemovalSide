"use client";
import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import heroContents from "./heroContent";
import HeroCard from "./HeroCard";
import Image from 'next/image';
import sunGif from '../../../public/assets/gifs/sun.gif';
import {motion,useInView, useAnimation } from 'framer-motion';
import HeroBanner from "./HeroBanner";

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
    <main ref={ref} id="home" className="w-full md:px-32 px-8 bg-[#DAF3F4] py-8">
      <HeroBanner />

      {/* <p>{currentTime.toLocaleTimeString()}</p> */}

      <div className="md:flex justify-between w-full gap-16 mb-6">
        <motion.div
        variants={{
          hidden: {  opacity: 0 },
          visible: {  opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ duration:2.5 }}
         className="md:w-[60%]">
          <div className="mb-4">
            <h3 className="font-bold text-xl">WELCOME</h3>
            <p>To The Official Home of Mr. Snow-It-All</p>
          </div>

          <p className="mb-4">
            <span className="font-bold text-black">Mr. Snow Removal</span> is an affordable
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
            <span className="font-bold text-black">Call Mr. Snow Removal</span> today and
            let us give you a hand! <span className="text-2xl font-bold text-black">905 922 4888</span>
          </p>
        </motion.div>
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
            <div class="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white py-12 px-6 text-center">
            <h3 className="mb-3">Oshawa, Ontario, Canada</h3>
            <div className="flex justify-center"><Image className="mb-3" src={sunGif} width={'100px'} height={'100px'} alt=""/></div>
            {temperature ? <h3>{`${temperature} °C`}</h3> : <h3>Loading...</h3>}
            </div>
            <h3 class="font-normal text-gray-700 dark:text-gray-400">
            {/* <p>Current Date with Year: {currentDate.toDateString()}</p> */}
            </h3>
            
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
 className="md:grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-4">
{heroContents.map((heroContent)=>{
  return <HeroCard key={heroContent.id} title={heroContent.title} content={heroContent.content}/>
})}
</motion.div>
    </main>
  );
};

export default HeroSection;

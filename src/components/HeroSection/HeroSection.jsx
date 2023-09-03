"use client";
import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import heroContents from "./heroContent";
import HeroCard from "./HeroCard";
import Image from 'next/image';
import {motion,useInView, useAnimation } from 'framer-motion';
import HeroBanner from "./HeroBanner";
import heroBg from '../../../public/assets/images/hero.webp'
import WeatherCard from "./WeatherCard";
import TopBanner from "./TopBanner";
import heroBg1 from '../../../public/assets/images/hero2.webp'



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

  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(null);
  
 
  return (
    <>
    <Image src={heroBg} alt="hero-bg" className="hidden md:flex md:absolute  z-10"/>
    <main ref={ref} id="home" className="w-full md:px-32 px-8  py-8 relative z-30 md:bg-transparent bg-[#DAF3F4]">
      <TopBanner />
      <h1>Welcome</h1>
      <div className="md:flex md:gap-8 mb-8">
      <motion.div
      variants={{
          hidden: { y: "100vw", opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
            className="bg-white shadow-lg sm:rounded-3xl sm:p-8 bg-clip-padding bg-opacity-60 border border-gray-200 backdrop-blur-none p-4 rounded-lg mb-5 md:mb-0 md:w-2/3"
          >
            <div className="tracking-tight text-gray-900">
            <h3 className="text-gray-900 mb-2">Welcome to <span className="font-semibold">Mr. Snow Removal</span> — Your Trusted Partner for Residential Snow Removal in Markham!</h3>
            <h3 className="mb-2">When winter covers your neighbourhood in snow, trust <span className="font-semibold">Mr. Snow Removal</span> to be your dedicated solution for hassle-free residential snow removal. With over 3 years experience in the Markham Region, we specialize <span className="font-semibold">EXCLUSIVELY</span> in residential snow removal. Our goal is to keep your home safe and free from snow and ice throughout the winter season, always thinking of you, the homeowner.</h3>
            <h3 className="mb-2">Our seasonal services run from November 1 to March 31, making sure that your property remains clear and accessible all winter long. Why struggle through deep snow? Say goodbye to snow hassles and  embrace winter's charm while we handle the hard work!</h3>
            <h3 className="mb-2">Call <span className="font-semibold">Mr. Snow Removal</span> today at <span className="font-semibold">416-420-8000</span> and let us lend you a hand!</h3>
            </div>
 
          </motion.div>
          
          

        <motion.div
        variants={{
          hidden: { y: "100vw", opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
        >
          <WeatherCard />
          
        </motion.div>
        </div>

        <div className="md:flex md:gap-8">
        <div className="bg-white shadow-lg sm:rounded-3xl sm:p-8 bg-clip-padding bg-opacity-60 border border-gray-200 backdrop-blur-none rounded-lg p-4 md:h-72 mb-4 md:mb-0">
            <h3 className="font-semibold mt-2 pb-2 text-xl">OUR EQUIPMENT </h3>
            <hr className="w-full h-1 mx-auto border-0 rounded bg-gray-700 mb-6 mt-2"></hr>
          
              <p>We use an arsenal of plastic shovels, snow blowers, and plow trucks for efficient and safe snow removal.</p>
             
            </div>
        <div className="rounded-xl">
        <Image src={heroBg1} alt=""  className="rounded-2xl md:h-72 border-2 border-black"/>
        </div>
        </div>
            
       
     
    </main>
    </>
  );
};

export default HeroSection;

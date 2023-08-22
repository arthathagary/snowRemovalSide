"use client";
import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import heroContents from "./heroContent";
import HeroCard from "./HeroCard";
import Image from 'next/image';
import sunGif from '../../../public/assets/gifs/sun.gif';
import {motion,useInView, useAnimation } from 'framer-motion';
import HeroBanner from "./HeroBanner";
import heroBg from '../../../public/assets/images/hero.jpg'
import WeatherCard from "./WeatherCard";
import TopBanner from "./TopBanner";
import cloud from "../../../public/assets/gifs/cloud.gif"



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
    <Image src={heroBg} alt="hero-bg" className="hidden md:flex md:absolute md:h-[100vh]"/>
    <main ref={ref} id="home" className="w-full md:px-32 px-8  py-8 relative z-50">
      <TopBanner />
      <div className="md:grid md:grid-cols-2 justify-between w-full gap-12 mb-6">
      <motion.div
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  mb-2 md:mb-0"
          >
            <div className=" md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <h3 className="text-white font-medium">Elevate your winter experience with Mr. Snow Removal's reliable and tailored residential snow removal services. Call us today at 416-420-8000  for a quote and enjoy a worry-free winter.</h3>
            <hr class="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
            <h3>Effective Snow Clearance</h3>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            We clear snow measuring 3cm or more using plows and high-powered snow blowers, combined with the use of plastic shovels to prevent property damage.
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
          <WeatherCard />

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
    </>
  );
};

export default HeroSection;

"use client";
import React,{ useEffect, useState,useRef } from 'react'
import TestimonialCard from './TestimonialCard'
import testiData from './testiData'
import {motion,useInView, useAnimation } from 'framer-motion';



const TestimonialSection = () => {
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
  return (
    <div ref={ref} className=' w-full md:px-32 px-8 my-12'>
    <div class="mx-auto max-w-screen-sm">
          <h2 class="text-center">Testimonials</h2>
      </div> 
  
  <motion.div
  variants={{
          hidden: { y: "100vw", opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
   className='md:grid md:grid-cols-3 gap-8'>
  {testiData.map((data)=>{
    return <TestimonialCard key={data.id} title={data.title} content={data.content} reviewer={data.reviewer} worksAt={data.worksAt}/>
  })}
  </motion.div>
 
 
    </div>
  )
}

export default TestimonialSection
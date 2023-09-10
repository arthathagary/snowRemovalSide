"use client";
import React,{useState,useEffect,useRef } from "react";
import quizes from "./quiz";
import {motion,useInView, useAnimation } from 'framer-motion';
const FaqSection = () => {

  const [click,setClick] = useState(null);
  const [click2,setClick2] = useState(null);
  const handleClick = (index)=> {
    if(click === index){
      setClick(null);
    }else{
      setClick(index);
    }
    
  }
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
    <div ref={ref} id="faq" className='w-full md:px-32 px-8 mt-8 bg-[#DAF3F4] py-8'>
    <div>
        <motion.h1
        variants={{
          hidden: { y: "100vw", opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
         >Frequently Asked Questions</motion.h1>
        
            <motion.div
            variants={{
          hidden: { y: "100vw", opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
            >
            {quizes.map((quiz,index)=>{
              return <div key={quiz.id}> <h5 className='flex items-center justify-between gap-4 font-bold mb-4' onClick={()=>handleClick(index)}><span className='cursor-pointer'>{quiz.question}</span><span className='text-xl cursor-pointer'>{click===index?'-':'+'}</span></h5>
                <h6 className={click === index ?'block':'hidden'}>{quiz.answer}</h6> 
                <hr className="w-full h-[2px] mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"/>
                </div>
            })}
            </motion.div>
           

           <p className="text-center">Elevate your winter experience with <span className="font-semibold text-gray-800">Mr. Snow Removal's</span> reliable and tailored residential snow removal services. </p>
           <p className="text-center"><span className="font-semibold text-gray-800">Call us</span> today at <span className="font-semibold text-gray-800">416-420-8000</span>  for a quote and enjoy a worry-free winter.</p>
           
        
    </div>
    </div>
   
  )
}

export default FaqSection
"use client";
import React, { useState, useEffect, useRef } from "react";
import ContactUsInput from "./ContactUsInput";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion, useInView, useAnimation } from "framer-motion";
import bannerBg from '../../../public/assets/images/banner.webp'
import { MdEmail} from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Image from 'next/image';



const ContactUsSection = () => {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });
  const controlAnimation = useAnimation();
  useEffect(() => {
    if (isView) {
      controlAnimation.start("visible");
    } else {
      controlAnimation.start("hidden");
    }
  }, [isView]);
  return (
    <form ref={ref} id="contactUs" >
    <Image src={bannerBg} alt="" className="absolute md:h-[30vh] h-[20vh]"/>
    <div className="h-52 flex items-center justify-center">
    <h1 className="text-gray-800 bg-white px-8 py-4 rounded-full z-30 text-xl md:text-3xl ">We would love to hear from you!</h1>
    </div>
    <div className="w-full md:px-32 px-8 py-8">
    <div className="md:flex justify-between mb-8">
    <div>
      <div className="flex items-center gap-4">
      <MdEmail size={30}/>
      <div>
      <p>Email Address:</p>
      <p>contact@mrsnowremoval.com</p>
      </div>
      </div>
    </div>

    <div>
      <div className="flex items-center gap-4">
      <FaPhoneAlt size={20} />
      <div>
      <p>Phone Number:</p>
      <p>416-420-8000</p>
      </div>
      </div>
    </div>



    </div>
     
      <motion.div
        variants={{
          hidden: { x: "-100vw", opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
      >
        <ContactUsInput labelName="First Name" labelName2="Last Name" />
        <ContactUsInput labelName="Email" labelName2="Phone" />
        <ContactUsInput labelName="Street Address" labelName2="City/Town" />
        <ContactUsInput
          labelName="Zip Code"
          labelName2="How Did You Hear About Us"
        />
       
        <div className="mb-8">
          <label
            htmlFor="message"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <div className="text-right">
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </motion.div>
      </div>
    </form>
  );
};

export default ContactUsSection;

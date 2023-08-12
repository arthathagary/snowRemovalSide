"use client";
import React, { useState, useEffect, useRef } from "react";
import ContactUsInput from "./ContactUsInput";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion, useInView, useAnimation } from "framer-motion";

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
    <form ref={ref} id="contactUs" className="w-full md:px-32 px-8 py-12">
      <motion.h2
        variants={{
          hidden: { x: "100vw", opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
        className="text-center"
      >
        We'd love to hear from you
      </motion.h2>
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
        <div className="relative mb-8">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            What Can We Help You With
          </label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>Agary</option>
            <option>Agary</option>
            <option>Agary</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <IoMdArrowDropdown size={20} />
          </div>
        </div>
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
    </form>
  );
};

export default ContactUsSection;

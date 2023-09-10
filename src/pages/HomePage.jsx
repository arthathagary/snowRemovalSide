"use client";
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection'
import FaqSection from '@/components/FaqSection/FaqSection'
import Footer from '@/components/Footer/Footer'
import HeroCard from '@/components/HeroSection/HeroCard'
import HeroSection from '@/components/HeroSection/HeroSection'
import NavBar from '@/components/NavBar/NavBar'
import Success from '@/components/Popups/success';
import RatesSection from '@/components/RatesSection/RatesSection'
import ServicesSection from '@/components/ServicesSection/ServicesSection'
import TestimonialSection from '@/components/TestimonialSection/TestimonialSection'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  return (
    <>
        <NavBar />
        <HeroSection />
        <ServicesSection />
        <RatesSection />
        <TestimonialSection />
        <FaqSection />
        <Footer />
        <ToastContainer />
    </>
  )
}

export default HomePage
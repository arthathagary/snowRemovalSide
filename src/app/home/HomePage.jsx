"use client";
import Footer from '@/components/Footer/Footer';
import HeroSection from '@/components/HeroSection/HeroSection'
import NavBar from '@/components/NavBar/NavBar'
import RatesSection from '@/components/RatesSection/RatesSection'
import ServicesSection from '@/components/ServicesSection/ServicesSection'
import TestimonialSection from '@/components/TestimonialSection/TestimonialSection'
import React from 'react'
import FaqSection from '@/components/FaqSection/FaqSection';

const HomePage = () => {
  return (
    <>
        <NavBar />
        <HeroSection />
        <ServicesSection />
        <RatesSection />
        <TestimonialSection />
        <FaqSection/>
        <Footer />
    </>
  )
}

export default HomePage
"use client";
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection'
import FaqSection from '@/components/FaqSection/FaqSection'
import Footer from '@/components/Footer/Footer'
import HeroCard from '@/components/HeroSection/HeroCard'
import HeroSection from '@/components/HeroSection/HeroSection'
import NavBar from '@/components/NavBar/NavBar'
import Payment from '@/components/Payment';
import RatesSection from '@/components/RatesSection/RatesSection'
import ServicesSection from '@/components/ServicesSection/ServicesSection'
import TestimonialSection from '@/components/TestimonialSection/TestimonialSection'
import React from 'react'

const HomePage = () => {
  return (
    <>
        <NavBar />
        <HeroSection />
        <ServicesSection />
        <RatesSection />
        <TestimonialSection />
        <FaqSection />
        {/* <Payment /> */}
        <Footer />
    </>
  )
}

export default HomePage
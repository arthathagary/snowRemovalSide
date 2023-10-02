import Footer from '@/components/Footer/Footer';
import HeroSection from '@/components/HeroSection/HeroSection'
import NavBar from '@/components/NavBar/NavBar'
import RatesSection from '@/components/RatesSection/RatesSection'
import ServicesSection from '@/components/ServicesSection/ServicesSection'
import TestimonialSection from '@/components/TestimonialSection/TestimonialSection'
import React from 'react'
import FaqSection from '@/components/FaqSection/FaqSection';
import SuccessNotify from '@/components/Notify/SuccessNotify';
import { useSearchParams } from 'next/navigation'
import FailureNotify from '@/components/Notify/FailureNotify';

const HomePage = () => {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  let renderingOption;

  if (status === "success") {
    renderingOption = <SuccessNotify />;
  } else if (status === "failure") {
    renderingOption = <FailureNotify />;
  } else {
    renderingOption = null;
  }
  return (
    <>
        {/* <NavBar /> */}
        {renderingOption}
       
        <HeroSection />
        <ServicesSection />
        <RatesSection />
        <TestimonialSection />
        <FaqSection/>
        {/* <Footer /> */}
    </>
  )
}

export default HomePage
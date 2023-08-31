import React from "react";
import Link from 'next/link';
import heroBg from "../../../public/assets/images/hero.jpg";
const TopBanner = () => {
  return (
    <div className="px-4 py-2 rounded-lg mb-6  bg-white shadow-lg sm:rounded-3xl sm:p-8 bg-clip-padding bg-opacity-60 border border-gray-200 backdrop-blur-xl">
      <div className="text-base leading-6 font-bold sm:text-lg sm:leading-7 md:flex md:justify-between">
        <p>
        NOW BOOKING FOR 2023-2024 SEASON - LIMITED SPOTS AVAILABLE
        </p>
        <Link href="#rates"><button>Book Now</button></Link>
      </div>
    </div>
  );
};

export default TopBanner;

import React from "react";
import Link from 'next/link';
const TopBanner = () => {
  return (
    <div className="px-4 py-2 rounded-lg mb-6  bg-white shadow-lg sm:rounded-3xl sm:p-8 bg-clip-padding bg-opacity-60 border border-gray-200 backdrop-blur-xl">
      <div className="text-base leading-6 font-bold sm:text-lg sm:leading-7">
        <p className="flex justify-center">
        NOW BOOKING FOR 2023-2024 SEASON - LIMITED SPOTS AVAILABLE
        </p>
        {/* <Link href="/#payment"><button className="text-[#872B36]">Book Now!</button></Link> */}
      </div>
    </div>
  );
};

export default TopBanner;

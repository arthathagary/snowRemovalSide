import React from "react";
import heroBg from "../../../public/assets/images/hero.jpg";
const WeatherCard = () => {
  return (
    <div className="px-4 mb-6  bg-white shadow-lg sm:rounded-3xl sm:p-8 bg-clip-padding bg-opacity-60 border border-gray-200 backdrop-blur-xl">

          <div className="text-base leading-6 font-bold sm:text-lg sm:leading-7 md:flex md:justify-between">
                <p>Hurry Up Limited Booking Available !!!</p>
                <button>Book Now</button>
          </div>
        </div>
  );
};

export default WeatherCard;

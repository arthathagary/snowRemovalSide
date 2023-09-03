import React from 'react'
import { FaUserCircle } from "react-icons/fa";
const TestimonialCard = (props) => {
  return (

    
      <figure className="flex flex-col  items-center  text-center border-b  lg:border-r bg-gray-600 border-gray-700 md:p-6 rounded-xl relative p-4">
              <blockquote className="mx-auto mb-8  text-gray-500 dark:text-gray-400">
                  <p className="my-4 text-white">{props.content}</p>
              </blockquote>
              <figcaption className="absolute bottom-4">
                  <div className="space-y-0.5 font-medium dark:text-white">
                      <div>{props.reviewer}</div>
                  </div>
              </figcaption>    
          </figure>



    
  )
}

export default TestimonialCard
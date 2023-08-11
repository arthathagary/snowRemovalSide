import React from 'react'
import { FaUserCircle } from "react-icons/fa";
const TestimonialCard = (props) => {
  return (

    
      <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{props.title}</h3>
                  <p class="my-4 text-gray-500">{props.content}</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                 <FaUserCircle size={25} color='white' className=''/>
                  <div class="space-y-0.5 font-medium dark:text-white text-left">
                      <div>{props.reviewer}</div>
                      <div class="text-sm font-light text-gray-500 dark:text-gray-400">{props.worksAt}</div>
                  </div>
              </figcaption>    
          </figure>



    
  )
}

export default TestimonialCard
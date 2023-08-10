import React from 'react'

const HeroCard = (props) => {
  return (
    <div>
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 md:h-44 mb-2 md:mb-0"
          >
            <div class="mb-2 md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <h3>{props.title}</h3>
            </div>
            <p class="font-normal text-gray-700 dark:text-gray-400">
            {props.content}
            </p>
          </a>

         
        </div>
  )
}

export default HeroCard;
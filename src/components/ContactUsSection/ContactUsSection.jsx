import React from 'react'
import ContactUsInput from './ContactUsInput'

const ContactUsSection = () => {
  return (
<form id='contactUs' class="w-full md:px-32 px-8 py-12">
<h1 className='text-center mb-8'>We'd love to hear from you</h1>
  <ContactUsInput labelName="First Name" labelName2="Last Name"/>
  <ContactUsInput labelName="Email" labelName2="Phone"/>
  <ContactUsInput labelName="Street Address" labelName2="City/Town"/>
  <ContactUsInput labelName="Zip Code" labelName2="How Did You Hear About Us"/>
  <div class="relative mb-8">
  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        What Can We Help You With
      </label>
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Agary</option>
          <option>Agary</option>
          <option>Agary</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
<div className='mb-8'>
<label for="message" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
</div>
<div className='text-right'>
<button class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
  Submit
</button>
</div>

   
 
</form>
  )
}

export default ContactUsSection
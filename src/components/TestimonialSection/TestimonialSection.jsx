
import React from 'react'
import TestimonialCard from './TestimonialCard'
import testiData from './testiData'



const TestimonialSection = () => {
  return (
    <div className=' w-full md:px-32 px-8 my-12'>
    <div class="mx-auto max-w-screen-sm">
          <h2 class="text-center">Testimonials</h2>
      </div> 
  
  <div className='md:grid md:grid-cols-3 gap-8'>
  {testiData.map((data)=>{
    return <TestimonialCard key={data.id} title={data.title} content={data.content} reviewer={data.reviewer} worksAt={data.worksAt}/>
  })}
  </div>
 
 
    </div>
  )
}

export default TestimonialSection
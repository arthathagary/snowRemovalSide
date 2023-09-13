'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const FailurePage = () => {
  const router = useRouter();
  const handleClick = () =>{
    router.push('/')
  }
  return (
    <div>
      <div className='fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-40'  id='wrapper'>
            <div className='w-[600px] flex flex-col'>
               
                <div className='bg-gray-600 p-10 rounded-xl'>
                    <p className='text-white mb-4'>Your Payment Failed</p>
                    <div className='flex justify-end'>
                      <button className='bg-white px-4 py-2 rounded-md' onClick={handleClick}>Close</button>
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FailurePage
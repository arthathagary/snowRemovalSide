"use client";
import React from 'react';
import Image from 'next/image';
import rateImg1 from '../../../public/assets/images/rates1.png';
import rateImg2 from '../../../public/assets/images/rates2.png';
import rateImg3 from '../../../public/assets/images/rates3.png'
import { LiaGreaterThanSolid } from "react-icons/lia";

const RatesSection = () => {
  return (
    <div id='rates' className=' w-full md:px-32 px-8 '>
    <main className='md:grid md:grid-cols-2'>
      <Image src={rateImg1} width={'500'} alt=''  />
      <Image src={rateImg2} width={'500'} alt='' className='justify-self-end'/>
      
    </main>

    <main className='md:grid md:grid-cols-2 md:gap-8'>
      <Image src={rateImg3} width={'500'} alt=''/>
      <ul className='justify-self-end mt-8'>
        <li className='flex  items-baseline gap-1 mb-5'><span><LiaGreaterThanSolid /></span><span>Seasonal contracts include the driveway, walkway and front steps/porch. Sidewalks are an additional charge.</span></li>
        <li className='flex  items-baseline gap-1 mb-5'><span><LiaGreaterThanSolid /></span><span>P-P-V pricing is PER VISIT and includes the driveway, walkway, sidewalk & front steps/porch.</span></li>
        <li className='flex  items-baseline gap-1 mb-5'><span><LiaGreaterThanSolid /></span><span>Driveways with municipal boulevards will be charged as full driveways.</span></li>
        <li className='flex  items-baseline gap-1 mb-5'><span><LiaGreaterThanSolid /></span><span>Price adjustments will be made for excessive walkways, sidewalks and/or additional property clearance.</span></li>
        <li className='flex  items-baseline gap-1 mb-5'><span><LiaGreaterThanSolid /></span><span>Customer provided salt will be spread free of charge.</span></li>
        <li className='flex  items-baseline gap-1 mb-5'><span><LiaGreaterThanSolid /></span><span>Listed prices DO NOT include tax.</span></li>
      </ul>
    </main>
    </div>
  )
}

export default RatesSection
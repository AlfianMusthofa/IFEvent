import React from 'react'
import PP from '../../assets/raw.png'

interface CardProps {
   title: string,
}

const Card: React.FC<CardProps> = ({ title }) => {
   return (
      <>
         <div className='bg-white text-black max-w-[240px]'>
            <img src={PP} id='course-photo' />
            <div className='mt-[10px]'>
               <p className='text-[13px] text-light-grey'>20 - 30 December 2024</p>
               <p className='font-semibold text-[17px] leading-[24px] line-clamp-2'>{title}</p>
               {/* <a href='/detail' className='text-[12px] text-yellow-primer font-semibold'>More Details</a> */}
               <a href='/detail' className='text-[12px] text-white font-medium bg-yellow-primer flex justify-center py-[9px] mt-[6px]'>More Details</a>
            </div>
         </div>
      </>
   )
}

export default Card
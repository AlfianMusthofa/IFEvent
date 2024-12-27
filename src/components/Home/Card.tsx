import React from 'react'
// import PP from '../../assets/raw.png'
import RAW from '../../assets/raw-bg.jpg'

interface CardProps {
   title: string,
}

const Card: React.FC<CardProps> = ({ title }) => {
   return (
      <>
         <div className='p-[10px] rounded-[5px] max-w-[235px] shadow-md border'>
            <img src={RAW} className='w-full h-[125px] object-cover rounded-[5px]' />
            <div className="content pt-[10px]">
               <p className='line-clamp-1 text-[15px] font-medium'>{title}</p>
               <p className='text-[11px] text-lighter-grey-grey'>24 December 2024</p>
               <p className='line-clamp-2 text-[12px] mt-[7px] text-light-grey'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione libero ab laboriosam totam quia voluptatum sed officiis commodi numquam incidunt?</p>
               <a href="/detail" className='bg-yellow-primer rounded-[5px] text-[12px] flex justify-center py-[7px] mt-[7px]'>More Details</a>
            </div>
         </div>
      </>
   )
}

export default Card
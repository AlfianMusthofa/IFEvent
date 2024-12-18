// import React from 'react'
import Raw2 from '../../assets/raw-bg.jpg'

// interface CardHistoryProps {
//    author: string,
//    date: Date,
//    title: string,
//    body: string,
//    category: string
// }

const CardHistory = () => {
   return (
      <>
         <div className='max-w-[310px]'>
            <img src={Raw2} className='w-[310px] h-[200px] object-cover' />
            <div className="content pt-[15px]">
               <p className='text-[11px] mb-[4px]'>Admin - 20 December 2024</p>
               <a href="/history-detail" className='text-[17px] line-clamp-2 font-semibold leading-[23px] mb-[4px]'><h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, recusandae.</h3></a>
               <p className='line-clamp-3 text-[12px] font-light mb-[4px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quisquam ut ducimus qui similique, ab distinctio minus dolore vitae dolores!</p>
               <a href="#" id='history-category'>Machine Learning</a>
            </div>
         </div>
      </>
   )
}

export default CardHistory
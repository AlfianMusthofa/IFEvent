import React from 'react'
// import Raw2 from '../../assets/raw-bg.jpg'

interface CardHistoryProps {
   author: string,
   date: string,
   title: string,
   body: string,
   url: string,
   id: number
}

const CardReport: React.FC<CardHistoryProps> = ({ author, date, title, body, url, id }) => {
   return (
      <>
         <div className='max-w-[310px]'>
            <img src={url} className='w-[310px] h-[200px] object-cover' />
            <div className="content pt-[15px]">
               <p className='text-[11px] mb-[4px]'>{author} - {date}</p>
               <a href={`/history-detail/${id}`} className='text-[17px] line-clamp-2 font-semibold leading-[23px] mb-[4px]'><h3>{title}</h3></a>
               <p className='line-clamp-3 text-[12px] font-light mb-[4px]'>{body}</p>
            </div>
         </div>
      </>
   )
}

export default CardReport
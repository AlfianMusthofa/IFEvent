import React from 'react'
import Email from '../../assets/icons/email.png'
import Edu from '../../assets/icons/mortarboard.png'

interface LecturerProps {
   name: string
   email: string
   image: string
   scholar: string
}

const Lecturer: React.FC<LecturerProps> = ({ name, email, image, scholar }) => {
   return (
      <>
         <div className="border p-3 rounded-lg flex gap-4 w-[450px] shadow-md mr-3 h-[180px]">
            <img src={image} className="w-[120px] rounded-lg" />
            <div className="content">
               <p className="font-medium">{name}</p>
               <p className="text-[14px] text-light-grey my-1">Lecturer</p>
               <div className="flex items-center gap-2">
                  <img src={Email} className="w-[20px]" />
                  <p className='text-[13px]'>{email}</p>
               </div>
               <a href={scholar}>
                  <div className="bg-yellow-primer flex items-center gap-2 p-[5px] w-[150px] rounded-[5px] mt-[10px]">
                     <img src={Edu} className="w-[20px]" />
                     <p className="text-[15px] font-light">Google Scholar</p>
                  </div>
               </a>
            </div>
         </div>
      </>
   )
}

export default Lecturer
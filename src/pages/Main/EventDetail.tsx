import Navbar from "../../components/navbar"
import PP from '../../assets/raw.png'

const EventDetail = () => {
   return (
      <>
         <Navbar />
         <div className="bg-[#F2F4FB]">
            <div className="container mx-auto py-[20px]">
               <div className="flex items-center justify-between">
                  <div className="col max-w-[550px]">
                     <h3 className="text-[29px] leading-[35px] font-medium text-black">Career Meetup with Design & Development</h3>
                     <div className="mt-[15px] text-light-grey text-[14px] flex flex-col gap-[4px]">
                        <p>3 Pertemuan</p>
                        <p>26 - 27 December 2024</p>
                        <p>Zoom & Youtube Exclusive</p>
                     </div>
                  </div>
                  <img src={PP} />
               </div>
            </div>
         </div>
      </>
   )
}

export default EventDetail
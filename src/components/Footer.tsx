import location from '../assets/icons/location.png'
import whatsapp from '../assets/icons/whatsapp.png'
import email from '../assets/icons/email.png'
import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import youtube from '../assets/icons/youtube.png'
import tiktok from '../assets/icons/tiktok.png'

const Footer = () => {
   return (
      <>
         <div className="bg-yellow-primer">
            <div className="container mx-auto text-black py-[30px] flex justify-between">
               <div className="col">
                  <h3 className="text-3xl font-semibold tracking-wide">SAKTIEvent</h3>
                  <div className="my-[20px]">
                     <p>IFEvent adalah solusi belajar online yang fleksibel.</p>
                     <p>Tersedia berbagai kelas skill praktis untuk memenuhi kebutuhan karir dan bisnis anda.</p>
                  </div>
                  <p className="text-[18px] font-semibold tracking-wide">Informatika UIN Sunan Gunung Djati Bandung</p>
                  <div className='my-[20px] flex flex-col gap-[15px]'>
                     <div className='flex items-center gap-[5px]'>
                        <img src={location} className="w-[25px]" />
                        <p>Jalan A.H Nasution No. 105, Cipadung, Cibiru, Kota Bandung, Jawa Barat 40614</p>
                     </div>
                     <div className='flex items-center gap-[10px]'>
                        <img src={whatsapp} className="w-[20px]" />
                        <p>0821-1938-9338</p>
                     </div>
                     <div className='flex items-center gap-[10px]'>
                        <img src={email} className="w-[20px]" />
                        <p>informatics@uinsgd.ac.id</p>
                     </div>
                  </div>
               </div>
               <div>
                  <div className="col flex flex-col gap-[7px]">
                     <a href="#" className='underline'>Home</a>
                     <a href="#" className='underline'>Event</a>
                     <a href="#" className='underline'>History</a>
                     <a href="#" className='underline'>About</a>
                     <a href="#" className='underline'>LogIn</a>
                  </div>
                  <div className='flex mt-[15px] gap-[20px]'>
                     <div className='bg-white p-[6px] rounded-full'>
                        <a href="#"><img src={facebook} className='w-[25px]' /></a>
                     </div>
                     <div className='bg-white p-[6px] rounded-full'>
                        <a href="https://www.instagram.com/ifuinbandung" target='_blank'><img src={instagram} className='w-[25px]' /></a>
                     </div>
                     <div className='bg-white p-[6px] rounded-full'>
                        <a href="https://www.youtube.com/@informatikauinbandung2413" target='_blank'><img src={youtube} className='w-[25px]' /></a>
                     </div>
                     <div className='bg-white p-[6px] rounded-full'>
                        <a href="#"><img src={tiktok} className='w-[25px]' /></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className='bg-yellow-secondary'>
            <div className='container text-[13px] mx-auto text-black font-medium py-[15px] flex justify-center gap-[40px]'>
               <p>2024 - Supported by SAKTI Technology Support</p>
               <a href="#" className='hover:underline'>Developed by Alfian Musthofa & Fadil Taufiqurrohmat</a>
            </div>
         </div>
      </>
   )
}

export default Footer
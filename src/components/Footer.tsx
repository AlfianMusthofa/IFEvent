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
         <div className="bg-blue">
            <div className="container mx-auto text-white py-[30px] flex justify-between">
               <div className="col">
                  <h3 className="text-3xl font-semibold tracking-wide">IFEVENT</h3>
                  <div className="my-[20px]">
                     <p>IFEvent adalah solusi belajar online yang fleksibel.</p>
                     <p>Tersedia berbagai kelas skill praktis untuk memenuhi kebutuhan karir dan bisnis anda.</p>
                  </div>
                  <p className="text-[18px] font-semibold tracking-wide">Informatika UIN Sunan Gunung Djati Bandung</p>
                  <div className='my-[20px] flex flex-col gap-[15px]'>
                     <div className='flex items-center gap-[10px]'>
                        <img src={location} className="w-[25px]" />
                        <p>Jl. A.H Nasution</p>
                     </div>
                     <div className='flex items-center gap-[10px]'>
                        <img src={whatsapp} className="w-[25px]" />
                        <p>+6285156003470</p>
                     </div>
                     <div className='flex items-center gap-[10px]'>
                        <img src={email} className="w-[25px]" />
                        <p>ifuinbdg@uin.ac.id</p>
                     </div>
                  </div>
               </div>
               <div>
                  <div className="col flex flex-col gap-[3px]">
                     <a href="#" className='underline'>Beranda</a>
                     <a href="#" className='underline'>Kelas</a>
                     <a href="#" className='underline'>Corporate</a>
                     <a href="#" className='underline'>Blog</a>
                     <a href="#" className='underline'>tentang</a>
                     <a href="#" className='underline'>Mitra</a>
                     <a href="#" className='underline'>Login Akun</a>
                  </div>
                  <div className='flex mt-[15px] gap-[20px]'>
                     <div className='bg-white p-[6px] rounded-full'>
                        <a href="#"><img src={facebook} className='w-[25px]' /></a>
                     </div>
                     <div className='bg-white p-[6px] rounded-full'>
                        <a href="#"><img src={instagram} className='w-[25px]' /></a>
                     </div>
                     <div className='bg-white p-[6px] rounded-full'>
                        <a href="#"><img src={youtube} className='w-[25px]' /></a>
                     </div>
                     <div className='bg-white p-[6px] rounded-full'>
                        <a href="#"><img src={tiktok} className='w-[25px]' /></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className='bg-[#00377f]'>
            <div className='container text-[13px] mx-auto text-white py-[15px] flex justify-center gap-[40px]'>
               <p>2024 - Informatika UIN Bandung</p>
               <a href="#" className='hover:underline'>Validasi Sertifikat</a>
               <a href="#" className='hover:underline'>Kebijakan Privasi</a>
               <a href="#" className='hover:underline'>Disclaimer</a>
            </div>
         </div>
      </>
   )
}

export default Footer
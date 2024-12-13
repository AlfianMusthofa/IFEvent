import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'
import Card from '../../components/Home/Card'
import { useEffect, useState } from 'react'

interface validatedPostsVariable {
   title: string,
   id: number
}

const Home = () => {

   const [data, setData] = useState<validatedPostsVariable[]>([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=3')
            const result = await response.json()
            setData(result);
         } catch (error) {
            console.log(error);
         }
      }
      fetchData();
   }, []);

   return (
      <>
         <Navbar />
         <div className='hero'>
            <div className='heroContent flex flex-col p-[15px] gap-[13px]'>
               <h3 className='text-[40px] font-semibold text-[#004aad] tracking-[1px]'>Selamat datang di IFEvent!</h3>
               <div className='py-[3px] px-[10px] bg-[#004aad]'>
                  <p className='font-semibold text-white tracking-[1px]'>Pengetahuan dan Keterampilan Meningkat, Karir dan Bisnis pun Melesat</p>
               </div>
            </div>
         </div>
         <div className='flex justify-center items-center bg-[#f2f4fb] gap-[40px] py-[50px]'>
            <div className='flex flex-col items-center text-center'>
               <h3 className='text-3xl font-semibold text-blue'>50+</h3>
               <p className='font-semibold text-black'>Mentor Profesional</p>
            </div>
            <div className='flex flex-col items-center text-center'>
               <h3 className='text-3xl font-semibold text-blue'>350+</h3>
               <p className='font-semibold text-black'>Peserta Kelas</p>
            </div>
            <div className='flex flex-col items-center text-center'>
               <h3 className='text-3xl font-semibold text-blue'>10+</h3>
               <p className='font-semibold text-black'>Kelas Terlaksana</p>
            </div>
            <div className='flex flex-col items-center text-center'>
               <h3 className='text-3xl font-semibold text-blue'>100+</h3>
               <p className='font-semibold text-black'>Training Offline / Private</p>
            </div>
         </div>
         <div className='py-[50px] bg-white'>
            <h2 className='text-center font-semibold text-blue text-3xl'>Kelas Dibuka</h2>
            <div className='flex justify-center mt-[20px]'>
               <div className='h-[2px] bg-blue w-[600px]'></div>
            </div>
            <div className='container mx-auto mt-[30px] flex flex-wrap gap-[13px] justify-center'>
               {data.map((item) => (
                  <Card key={item.id} title={item.title} />
               ))}
            </div>
            <div className='flex justify-center mt-[40px]'>
               <a href="#" className='text-[14px] px-[30px] py-[10px] rounded-full bg-blue text-white tracking-wide'>Lihat Semua Kelas</a>
            </div>
         </div>
         <div className='bg-[#f2f4fb]'>
            <div className='container mx-auto  py-[20px] flex items-center justify-between'>
               <p className='text-[#c4b8bd]'>"The capacity to learn is a gift; The ability to learn is a skill; The willingness to learn is a choice."</p>
               <p className='text-[#c4b8bd]'>- Brian Herbert</p>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default Home
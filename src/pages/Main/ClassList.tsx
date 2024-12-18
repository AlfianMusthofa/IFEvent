import Navbar from "../../components/navbar"
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instagram.png'
import youtube from '../../assets/icons/youtube.png'
import tiktok from '../../assets/icons/tiktok.png'
import Category from "../../components/ClassList/Category"
import Footer from "../../components/Footer"

const ClassList = () => {

   return (
      <>
         <Navbar />
         <div className="bg-white h-[225px] flex justify-center items-center">
            <h1 className="text-[70px] font-semibold text-yellow-primer">Class</h1>
         </div>
         <div className="container mx-auto py-[35px] flex items-center justify-between gap-[20px]">
            <p className="w-[600px] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in aperiam aspernatur mollitia quibusdam quod fugiat repudiandae itaque, laboriosam esse tenetur ratione, illum aut, quia molestiae. Aliquam id pariatur facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, inventore? Itaque dicta explicabo quasi aut natus expedita repellat sit blanditiis!</p>
            <div className='flex gap-[15px]'>
               <div className='bg-white p-[6px] rounded-full'>
                  <a href="#"><img src={facebook} className='w-[33px]' /></a>
               </div>
               <div className='bg-white p-[6px] rounded-full'>
                  <a href="#"><img src={instagram} className='w-[33px]' /></a>
               </div>
               <div className='bg-white p-[6px] rounded-full'>
                  <a href="#"><img src={youtube} className='w-[33px]' /></a>
               </div>
               <div className='bg-white p-[6px] rounded-full'>
                  <a href="#"><img src={tiktok} className='w-[33px]' /></a>
               </div>
            </div>
         </div>
         {/* classlist */}
         <Category name="AI & Blockchain" />
         <Category name="Machine Learning" />
         <Footer />
      </>
   )
}

export default ClassList
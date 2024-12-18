import Marquee from 'react-fast-marquee'
import SponsorsImage from '../../assets/sponsors/uinjakarta.jpg'

const Sponsors = () => {
   return (
      <div className='container mx-auto py-[10px] my-[15px]'>
         <p className='text-center mb-[40px] text-[17px] font-semibold tracking-wider'>TRUSTED BY THE MOST AMBITIOUS PARTNERS</p>
         <Marquee gradient={true}>
            <div className='mx-[15px]'>
               <img src={SponsorsImage} className='w-[100px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={SponsorsImage} className='w-[100px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={SponsorsImage} className='w-[100px]' />
            </div>
            <div className='mx-[15px]'>
               <img src={SponsorsImage} className='w-[100px]' />
            </div>
         </Marquee>
      </div>
   )
}

export default Sponsors
import Bg from '../../assets/raw-bg.jpg'

const CardSimpleHistory = () => {
   return (
      <>
         <div className='flex gap-[10px]'>
            <img src={Bg} className='w-[110px] rounded-[7px]' />
            <div>
               <a href="/history-detail"><p className='text-[16px] line-clamp-2 font-medium leading-[22px]'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p></a>
               <p className='text-[11px] mt-[5px]'>20 December 2024</p>
            </div>
         </div>
      </>
   )
}

export default CardSimpleHistory
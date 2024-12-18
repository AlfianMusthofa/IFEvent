import Logo from '../../assets/icons/logo.png'
import Person from '../../assets/icons/profile.png'
import Lock from '../../assets/icons/padlock.png'

const AdminLogin = () => {
   return (
      <>
         <div className="w-full h-[100vh] flex justify-center items-center">
            <div className='border p-[17px] flex flex-col items-center shadow-md'>
               <img src={Logo} className='w-[60px]' />
               <div className='text-center mt-[13px]'>
                  <p className='font-semibold text-[18px]'>Hello Admin</p>
               </div>
               <form action="" method="post" className='mt-[20px] flex flex-col gap-[13px]'>
                  <div className='border flex w-[310px] gap-2 p-[7px] rounded-[5px] border-yellow'>
                     <img src={Person} className='w-[25px]' />
                     <input type="text" name="username" id="username" className='w-full text-[15px] outline-none' placeholder='Username' />
                  </div>
                  <div className='border flex w-[310px] gap-2 p-[7px] rounded-[5px] border-yellow'>
                     <img src={Lock} className='w-[22px]' />
                     <input type="password" name="password" id="password" className='w-full text-[15px] outline-none' placeholder='Password' />
                  </div>
                  <button type="submit" className='bg-yellow-primer text-[14px] text-white py-[8px] rounded-[5px]'>LogIn</button>
               </form>
            </div>
         </div>
      </>
   )
}

export default AdminLogin
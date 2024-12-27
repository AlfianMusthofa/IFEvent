import Logo from '../../assets/icons/logo.png'
import Person from '../../assets/icons/profile.png'
import Lock from '../../assets/icons/padlock.png'
import InformationBtn from '../../assets/icons/information-button.png'

const Login = () => {
   return (
      <>
         <div className="w-full h-[100vh] flex justify-center items-center">
            <div className='border p-[17px] flex flex-col items-center shadow-md'>
               <img src={Logo} className='w-[60px]' />
               <div className='text-center mt-[13px]'>
                  <p className='font-semibold text-[18px]'>Welcome Back</p>
                  <p className='text-[13px] mt-[3px]'>Dont have an account? <a href="/register" className='font-medium'>Sign Up</a></p>
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
                  <button type="submit" className='bg-yellow-primer text-[14px] text-white py-[8px] rounded-[5px]'>Login</button>
               </form>
               <div className='mt-[15px]'>
                  <div className='flex items-center gap-[10px]'>
                     <img src={InformationBtn} className='w-[16px]' />
                     <p className='text-[13px]'>Students use the SALAM account</p>
                  </div>
                  <div className='flex items-center gap-[10px] mt-[8px]'>
                     <img src={InformationBtn} className='w-[16px]' />
                     <p className='text-[13px]'>Admin login <a href="/admin-login" className='underline'>here</a></p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Login
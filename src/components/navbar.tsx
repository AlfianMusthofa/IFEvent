import Logo from '../assets/icons/logo.png'

const Navbar = () => {
   return (
      <>
         <div className="bg-yellow-primer text-white">
            <div className="container mx-auto flex justify-between py-[20px]">
               <div>
                  <a href="/"><img src={Logo} className='w-[60px]' /></a>
               </div>
               <div className="flex items-center gap-[14px] text-[15px] text-black font-medium">
                  <a href="#" className="hover:underline">Home</a>
                  <a href="#" className="hover:underline">Events</a>
                  <a href="/history" className="hover:underline">History</a>
                  <a href="/about" className="hover:underline">About</a>
                  <a href="/partners" className="hover:underline">Partner</a>
                  <a href="/login" className="hover:underline">Login</a>
               </div>
            </div>
         </div>
      </>
   )
}

export default Navbar
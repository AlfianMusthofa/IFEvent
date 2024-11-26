const navbar = () => {
   return (
      <>
         <div className="bg-[#004aad] text-white">
            <div className="container mx-auto flex justify-between py-[10px]">
               <div>
                  <a href="#" className="text-[40px]">IFEVENT</a>
               </div>
               <div className="flex items-center gap-[14px] text-[15px]">
                  <a href="#" className="hover:underline">Beranda</a>
                  <a href="#" className="hover:underline">Kelas</a>
                  <a href="#" className="hover:underline">Corporate</a>
                  <a href="#" className="hover:underline">Blog</a>
                  <a href="#" className="hover:underline">Tentang</a>
                  <a href="#" className="hover:underline">Mitra</a>
                  <a href="#" className="hover:underline">Login Akun</a>
               </div>
            </div>
         </div>
      </>
   )
}

export default navbar
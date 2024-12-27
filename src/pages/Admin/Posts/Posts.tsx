import Event from '../../../assets/icons/calendar.png'
import Blog from '../../../assets/icons/online.png'
import Logo from '../../../assets/icons/logo.png'
import Trashbin from '../../../assets/icons/bin.png'
import Edit from '../../../assets/icons/edit.png'

const Posts = () => {
   return (
      <>
         <div className="flex">
            <div className="col h-[100vh] bg-[#222d32] text-white w-[300px]">
               <div className='flex justify-center py-[25px]'>
                  <img src={Logo} className='w-[60px]' />
               </div>
               <div className='p-[10px] text-[12px] bg-[#1a2226]'>
                  <p>MAIN NAVIGATION</p>
               </div>
               <div>
                  <a href="#" className=" hover:bg-[#9499ba]">
                     <div className='p-[10px] flex items-center gap-3 text-[13px]'>
                        <img src={Event} className='w-[28px] p-[4px] rounded-[3px]' />
                        <p>Events</p>
                     </div>
                  </a>
                  <a href="#" className=" hover:bg-[#9499ba]">
                     <div className='p-[10px] flex items-center gap-3 text-[13px]'>
                        <img src={Blog} className='w-[28px] p-[4px] rounded-[3px]' />
                        <p>Posts</p>
                     </div>
                  </a>
                  <a href="#" className=" hover:bg-[#9499ba]">
                     <div className='p-[10px] flex items-center gap-3 text-[13px]'>
                        <img src={Blog} className='w-[28px] p-[4px] rounded-[3px]' />
                        <p>Users</p>
                     </div>
                  </a>
                  <a href="#" className=" hover:bg-[#9499ba]">
                     <div className='p-[10px] flex items-center gap-3 text-[13px]'>
                        <img src={Blog} className='w-[28px] p-[4px] rounded-[3px]' />
                        <p>Logout</p>
                     </div>
                  </a>
               </div>
            </div>
            <div className="col border w-full p-[20px] bg-[#ecf0f5]">
               <div className='flex justify-between items-center'>
                  <h3 className='text-[25px] text-black font-medium'>Posts</h3>
                  <a href="#" className='text-[14px] bg-[#3c8dbc] text-white font-medium px-[20px] py-[7px] rounded-[5px]'>Add Posts</a>
               </div>
               <div className='flex my-[12px] gap-[10px]'>
                  <div className='bg-white w-[200px] p-[8px] rounded-[5px] shadow-sm'>
                     <p className='text-[14px] tracking-wide text-light-grey'>Total Posts</p>
                     <h1 className='text-[30px] font-medium text-black'>10</h1>
                  </div>
               </div>
               <div className='bg-white p-[10px] shadow-sm'>
                  <div className="overflow-x-auto">
                     <table className="table">
                        {/* head */}
                        <thead>
                           <tr>
                              <th></th>
                              <th className='text-[14px]'>Title</th>
                              <th className='text-[14px]'>Body</th>
                              <th className='text-[14px]'>Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           {/* row 1 */}
                           <tr className="bg-base-200">
                              <th>1</th>
                              <td>Cy Ganderton</td>
                              <td className='line-clamp-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, ipsum!</td>
                              <td>
                                 <div className="flex items-center gap-4">
                                    <a href="#">
                                       <img src={Edit} className='w-[17px]' />
                                    </a>
                                    <a href="#">
                                       <img src={Trashbin} className='w-[17px]' />
                                    </a>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Posts
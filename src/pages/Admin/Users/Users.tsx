import Searcglogo from '../../../assets/icons/search-interface-symbol.png'
import Person from '../../../assets/person.jpg'
import Logo from '../../../assets/icons/logo.png'
import Eventlogo from '../../../assets/icons/schedule.png'
import Userlogo from '../../../assets/icons/user.png'
import Bloglogo from '../../../assets/icons/blogging.png'
import Exitlogo from '../../../assets/icons/exit.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface UserProps {
   id: number
   name: string
   phone: string
   email: string
}

const Users = () => {

   const [user, setUser] = useState<UserProps[]>([]);
   const [dataAdmin, setDataAdmin] = useState({ id: null, username: "", email: "" })

   useEffect(() => {
      const getUser = async () => {
         const response = await axios.get('http://localhost:3000/api/v1/currentUser', { withCredentials: true })
         setDataAdmin(response.data)
      }

      getUser()
   }, [])

   useEffect(() => {
      const getAllUsers = async () => {
         const response = await axios.get('http://localhost:3000/api/v1/users', { withCredentials: true })
         console.log(response.data.result)
         setUser(response.data.result)
      }
      getAllUsers()
   }, [])

   const logout = async () => {
      try {
         await axios.delete('http://localhost:3000/api/v1/logout', { withCredentials: true })
         window.location.href = ('/');
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <>
         <div className='flex h-[100vh]'>
            <div className="col w-[280px] p-4 border border-l">
               <div className='flex items-center gap-2'>
                  <img src={Logo} className='w-[45px]' />
                  <h3>SAKTIEvent</h3>
               </div>
               <div className="menu mt-[30px] flex flex-col gap-3">
                  <a href='/dashboard' className='flex items-center gap-2 p-2 rounded-[6px]'>
                     <img src={Eventlogo} className='w-[25px]' />
                     <p>Events</p>
                  </a>
                  <a href='/dashboard/users' className='flex items-center gap-2 p-2 rounded-[6px] bg-yellow-primer'>
                     <img src={Userlogo} className='w-[22px]' />
                     <p>Users</p>
                  </a>
                  <a href='/dashboard/report' className='flex items-center gap-2 p-2 rounded-[6px]'>
                     <img src={Bloglogo} className='w-[22px]' />
                     <p>Reports</p>
                  </a>
                  <a onClick={logout} className='flex items-center gap-2 p-2 absolute bottom-5 cursor-pointer'>
                     <img src={Exitlogo} className='w-[20px]' />
                     <p>Logout</p>
                  </a>
               </div>
            </div>
            <div className="col w-full p-6 bg-[#f5f5f5]">
               <div className='flex items-center justify-between'>
                  <div className='border flex items-center gap-2 px-4 py-2 rounded-[50px] shadow-md bg-white'>
                     <img src={Searcglogo} className='w-[17px]' />
                     <input type="text" name="search" id="search" placeholder='Search' className='w-[350px] outline-none' />
                  </div>
                  <div className='flex items-center gap-3'>
                     <img src={Person} className='w-[40px] rounded-full' />
                     <div>
                        <p className='text-[14px]'>{dataAdmin.username}</p>
                        <p className='text-[11px] text-light-grey'>019283712638123123</p>
                     </div>
                  </div>
               </div>
               <div className='my-[23px] flex items-center justify-between'>
                  <h3 className='text-[25px] font-semibold tracking-wider'>Users</h3>
                  {/* <a href="#">
                     <div className='px-4 py-2 rounded-[5px] bg-yellow-primer shadow-md'>
                        <p className='text-[14px]'>+ Add New Event</p>
                     </div>
                  </a> */}
               </div>
               {/* table */}
               <div className='border p-3 rounded-[6px] bg-white shadow-md'>
                  <table className='w-full'>
                     <thead>
                        <tr className='text-left  border-b text-[14px]'>
                           <th className='pb-[7px]'>No</th>
                           <th className='pb-[7px]'>Username</th>
                           <th className='pb-[7px]'>Email</th>
                           <th className='pb-[7px]'>Phone</th>
                           <th className='pb-[7px]'>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {user.map((item, index) => (
                           <tr className='border-b' key={item.id}>
                              <td className='py-[8px]'>{index + 1}</td>
                              <td className='py-[8px] text-[15px]'>{item.name}</td>
                              <td className='py-[8px] text-[15px]'>{item.email}</td>
                              <td className='py-[8px] text-[15px]'>{item.phone}</td>
                              <td className='py-[8px] text-[15px] flex gap-1 items-center text-white'>
                                 <a href="#" className='px-[10px] py-[2px] bg-red-500 rounded-[3px]'>Delete</a>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
                  {/* Pagination */}
                  <div className='flex items-center justify-between mt-[30px] text-[14px]'>
                     <a href="#">Previous</a>
                     <div className='flex items-center gap-1'>
                        <a href="#" className='w-[25px] h-[25px] rounded-[3px] flex justify-center items-center bg-yellow-primer'>1</a>
                        <a href="#" className='w-[25px] h-[25px] rounded-[3px] flex justify-center items-center'>2</a>
                        <a href="#" className='w-[25px] h-[25px] rounded-[3px] flex justify-center items-center'>3</a>
                     </div>
                     <a href="#">Next</a>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Users
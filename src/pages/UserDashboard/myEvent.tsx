import axios from "axios"
import Footer from "../../components/Footer"
import Navbar from "../../components/navbar"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

interface UserDashboardProps {
   id: number;
}

const UserDashboard = () => {

   const { id } = useParams();
   const [user, setUser] = useState<UserDashboardProps[]>([])
   const [history, setHistory] = useState([])

   const logout = async () => {
      try {
         await axios.delete('http://localhost:3000/api/v1/logout', { withCredentials: true })
         window.location.href = ('/');
      } catch (error) {
         console.log(error);
      }
   }


   useEffect(() => {

      const getCurrentUser = async () => {
         try {
            const response = await axios.get('http://localhost:3000/api/v1/currentUser', { withCredentials: true })
            setUser(response.data)
         } catch (error) {
            console.log(error);
         }

      }

      const getHistoryUser = async () => {
         const response = await axios.get(`http://localhost:3000/api/v1/history/user/${id}`, { withCredentials: true })
         setHistory(response.data)
      }

      getCurrentUser();
      getHistoryUser();
   }, [])

   return (
      <>
         <Navbar />
         <div className="bg-yellow-light py-[25px]">
            <div className="container mx-auto text-[27px] font-medium">
               <h2>My Events</h2>
            </div>
         </div>
         <div className="container mx-auto my-9 flex gap-4">
            <div className="col w-[240px] border-t border-b py-5">
               <div className="flex flex-col gap-2">
                  <a href={`/user/dashboard/${user.id}`} className="bg-yellow-primer p-2 rounded-[5px]">My Events</a>
                  <a href={`/user/myprofile/${user.id}`} className="p-2 rounded-[5px]">My Profile</a>
                  <button onClick={logout} className="p-2 rounded-[5px] text-start">Log Out</button>
               </div>
            </div>
            <div className="col w-full border-t border-b py-1">
               <table className="w-full">
                  <thead>
                     <tr>
                        <th className="text-sm text-left py-2 px-3">No</th>
                        <th className="text-sm text-left py-2 px-3">Event</th>
                        <th className="text-sm text-left py-2 px-3">Link</th>
                     </tr>
                  </thead>
                  <tbody>
                     {history.map((item, index) => (
                        <tr>
                           <td className="text-sm text-left py-2 px-3">{index + 1}</td>
                           <td className="text-sm text-left py-2 px-3">{item.event.eventName}</td>
                           <td className="text-sm text-left py-2 px-3"><a href={`${item.event.link}`}>{item.event.link}</a></td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default UserDashboard
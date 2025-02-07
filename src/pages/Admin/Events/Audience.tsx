import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const API_BASE_URL = import.meta.env.VITE_URL_API

const Audience = () => {

   const { id } = useParams()
   const [audience, setAudience] = useState(null)

   useEffect(() => {
      const getAudiences = async () => {
         const response = await axios.get(`${API_BASE_URL}/api/v1/events/${id}`, { withCredentials: true })
         setAudience(response.data)
      }
      getAudiences();
   }, [id])

   return (
      <>
         <div className="container mx-auto">
            <div className="overflow-x-auto border p-2 mt-5 rounded-[5px] shadow-md">
               <table className="table table-zebra">
                  {/* head */}
                  <thead>
                     <tr>
                        <th></th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                     </tr>
                  </thead>
                  <tbody>
                     {audience?.EventUser?.map((item, index) => (
                        <tr key={item.id}>
                           <th>{index + 1}</th>
                           <td>{item.User.name}</td>
                           <td>{item.User.email}</td>
                           <td>{item.User.phone}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </>
   )
}

export default Audience
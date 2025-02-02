import Navbar from "../../components/navbar"
import Person from '../../assets/person.jpg'
import Syllabus from "../../components/Home/Syllabus"
import Footer from "../../components/Footer"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const EventDetail = () => {

   const { id } = useParams();

   const [event, setEvent] = useState({ Speaker: [] });
   const [user, setUser] = useState([]);

   useEffect(() => {

      const getCurrentUser = async () => {
         try {
            const response = await axios.get('http://localhost:3000/api/v1/currentUser', { withCredentials: true })
            setUser(response.data)
         } catch (error) {
            console.log(error);
         }
      }

      const getThisEvent = async () => {
         const response = await axios.get(`http://localhost:3000/api/v1/public/events/${id}`)
         setEvent(response.data)
         console.log(response.data.Speaker[0].speakerName)
      }

      getThisEvent();
      getCurrentUser();

   }, [id])

   return (
      <>
         <Navbar />
         {/* Judul */}
         <div className="bg-yellow-light">
            <div className="container mx-auto py-[30px]">
               <div className="flex items-center justify-between">
                  <div className="col max-w-[550px]">
                     <h3 className="text-[29px] leading-[35px] font-medium text-black">{event.eventName}</h3>
                     <div className="mt-[8px] text-light-grey text-[14px] flex flex-col gap-[4px]">
                        <p>26 - 27 December 2024</p>
                        <p>{event.place}</p>
                     </div>
                     <button className="text-sm mt-3 px-5 py-2 rounded-[4px] bg-yellow-primer shadow-md">Register</button>

                  </div>
                  <img src={event.url} className="w-[240px] object-cover" />
               </div>
            </div>
         </div>
         {/* Alasan */}
         <div className="container mx-auto flex justify-between gap-[20px] py-[30px]">
            <div className="col w-[700px]">
               <h3 className="text-black font-semibold text-[20px]">Why should you take part in this event?</h3>
               <p className="text-[14px] mt-[10px]">{event.reasons}</p>
            </div>
            <div className="col w-[600px]">
               <h3 className="text-black font-semibold text-[20px]">what's going on at this event?</h3>
               <p className="text-[14px] mt-[10px]">{event.descriptions}</p>
            </div>
         </div>
         {/* Mentor */}
         <div className="bg-yellow-light flex justify-center py-[30px] gap-[50px] items-center">
            <img src={event.Speaker[0]?.urlimage} className="w-[140px] rounded-full" />
            <div className="max-w-[600px] flex flex-col gap-[3px]">
               <h3 className="text-[19px] font-medium text-black">{event.Speaker[0]?.speakerName}</h3>
               <p className="text-[14px] text-light-grey" >{event.Speaker[0]?.speakerPosition}</p>
               <p className="text-[14px] w-[480px]">{event.Speaker[0]?.speakerBiography}</p>
            </div>
         </div>
         {/* Syllabus */}
         <div className="div  mt-[20px] py-[30px]">
            <div className="container mx-auto flex gap-[20px]">
               <Syllabus />
               <div className="w-full flex flex-col gap-[20px]">
                  <p className="text-sm">{event.notes}</p>
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default EventDetail
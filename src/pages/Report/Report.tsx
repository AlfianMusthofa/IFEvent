import Navbar from "../../components/navbar"
import Footer from "../../components/Footer"
import axios from "axios"
import { useEffect, useState } from "react"
import CardReport from "../../components/Report/CardReport"

interface ReportProps {
   author: string,
   date: string,
   title: string,
   body: string,
   url: string,
   id: number
}

const History = () => {

   const [reports, setReports] = useState<ReportProps[]>([])

   useEffect(() => {
      const getReports = async () => {
         const response = await axios.get('http://localhost:3000/api/v1/reports');
         setReports(response.data.result)
      }
      getReports();
   }, [])

   return (
      <>
         <Navbar />
         <div className="flex justify-center items-center text-[50px] font-semibold text-yellow-primer h-[230px]">
            <h1>Reports</h1>
         </div>
         <div className="container mx-auto py-[20px] flex gap-5 justify-center flex-wrap">
            {reports.map((item) => (
               <CardReport author={item.author} body={item.body} url={item.url} title={item.title} date={item.date} key={item.id} id={item.id} />
            ))}
         </div>
         <div className="container mx-auto flex justify-center items-center py-[20px]">
            <a href="#" className="border flex justify-center items-center h-[40px] px-[10px] text-[15px]">Previous</a>
            <a href="#" className="border bg-yellow-primer flex justify-center items-center w-[40px] h-[40px]">1</a>
            <a href="#" className="border flex justify-center items-center w-[40px] h-[40px]">2</a>
            <a href="#" className="border flex justify-center items-center w-[40px] h-[40px]">3</a>
            <a href="#" className="border flex justify-center items-center w-[40px] h-[40px]">4</a>
            <a href="#" className="border flex justify-center items-center w-[40px] h-[40px]">5</a>
            <a href="#" className="border flex justify-center items-center h-[40px] px-[10px] mr-[7px] text-[15px]">Next</a>
         </div>
         <Footer />
      </>
   )
}

export default History
import Navbar from "../../components/navbar"
import CardHistory from "../../components/History/CardHistory"
import Footer from "../../components/Footer"

const History = () => {
   return (
      <>
         <Navbar />
         <div className="flex justify-center items-center text-[50px] font-semibold text-yellow-primer h-[230px]">
            <h1>History</h1>
         </div>
         <div className="container mx-auto py-[20px] flex gap-5 justify-center flex-wrap">
            <CardHistory />
            <CardHistory />
            <CardHistory />
            <CardHistory />
            <CardHistory />
            <CardHistory />
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
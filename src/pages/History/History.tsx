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
         <Footer />
      </>
   )
}

export default History
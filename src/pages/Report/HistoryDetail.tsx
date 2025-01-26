import Navbar from "../../components/navbar"
import Bg from '../../assets/raw-bg.jpg'
import CardSimpleHistory from "../../components/Report/CardSimpleHistory"
import Footer from "../../components/Footer"

const HistoryDetail = () => {
   return (
      <>
         <Navbar />
         <div className="container mx-auto py-[30px]">
            <div className="flex justify-center items-center">
               <h3 className="text-[24px] font-medium w-[600px] text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro?</h3>
            </div>
            <p className="text-center text-[12px] mt-[10px]">Admin - 20 Desember 2024</p>
            <img src={Bg} className="my-[30px] h-[500px] w-full object-cover rounded-[10px]" />
            <div className="history-body flex justify-between gap-[15px]">
               <div className="col">
                  <p className="text-[15px] mb-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam accusamus quam voluptas fuga omnis veritatis odio distinctio sunt hic illo pariatur quod nihil excepturi at doloribus maxime ad saepe voluptatem commodi sapiente provident dolores vero! Voluptate reiciendis repellendus vero omnis, repellat ad quae consequuntur sequi ab quam, nemo quidem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur inventore dolorem minima deleniti optio sint corporis ut, quos fuga pariatur distinctio nulla enim facere sequi, in, porro nam assumenda doloremque architecto laborum adipisci labore quam. Vero obcaecati, harum id voluptas sint ipsam ab sunt facilis nesciunt adipisci veniam nostrum?</p>
                  <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam accusamus quam voluptas fuga omnis veritatis odio distinctio sunt hic illo pariatur quod nihil excepturi at doloribus maxime ad saepe voluptatem commodi sapiente provident dolores vero! Voluptate reiciendis repellendus vero omnis, repellat ad quae consequuntur sequi ab quam, nemo quidem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur inventore dolorem minima deleniti optio sint corporis ut, quos fuga pariatur distinctio nulla enim facere sequi, in, porro nam assumenda doloremque architecto laborum adipisci labore quam. Vero obcaecati, harum id voluptas sint ipsam ab sunt facilis nesciunt adipisci veniam nostrum?</p>
               </div>
               <div className="col w-[2500px]">
                  <div className="p-[10px]" id="history-more">
                     <h3 className="text-[20px] font-medium">More</h3>
                     <div className="mt-[20px] flex flex-col gap-[15px]">
                        <CardSimpleHistory />
                        <CardSimpleHistory />
                        <CardSimpleHistory />
                        <CardSimpleHistory />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default HistoryDetail
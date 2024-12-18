import Navbar from "../../components/navbar"
import PP from '../../assets/raw.png'
import Person from '../../assets/person.jpg'
import CardPayment from "../../components/EventDetail/CardPayment"
import Syllabus from "../../components/Home/Syllabus"
import Footer from "../../components/Footer"

const EventDetail = () => {
   return (
      <>
         <Navbar />
         {/* Judul */}
         <div className="bg-[#F2F4FB]">
            <div className="container mx-auto py-[30px]">
               <div className="flex items-center justify-between">
                  <div className="col max-w-[550px]">
                     <h3 className="text-[29px] leading-[35px] font-medium text-black">Career Meetup with Design & Development</h3>
                     <div className="mt-[15px] text-light-grey text-[14px] flex flex-col gap-[4px]">
                        <p>3 Pertemuan</p>
                        <p>26 - 27 December 2024</p>
                        <p>Zoom & Youtube Exclusive</p>
                     </div>
                  </div>
                  <img src={PP} />
               </div>
            </div>
         </div>
         {/* Alasan */}
         <div className="container mx-auto flex justify-between gap-[20px] py-[30px]">
            <div className="col w-[700px]">
               <h3 className="text-black font-semibold text-[20px]">Kenapa kamu harus ikut kelas ini ?</h3>
               <p className="text-[14px] mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione necessitatibus voluptatem veniam labore quisquam quis eveniet itaque laudantium aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi recusandae quas explicabo temporibus necessitatibus numquam corporis perferendis illum velit.</p>
            </div>
            <div className="col w-[600px]">
               <h3 className="text-black font-semibold text-[20px]">Belajar apa saja dikelas ini ?</h3>
               <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title text-[17px] font-medium">Click to open this one and close others</div>
                  <div className="collapse-content">
                     <p className="text-[14px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla hic ad repudiandae explicabo asperiores ut nobis aperiam soluta. Nemo, ipsam!</p>
                  </div>
               </div>
               <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-[17px] font-medium">Click to open this one and close others</div>
                  <div className="collapse-content">
                     <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor porro doloremque ipsum molestias consectetur. Quasi eos omnis ab natus fugit.</p>
                  </div>
               </div>
               <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-[17px] font-medium">Click to open this one and close others</div>
                  <div className="collapse-content">
                     <p className="text-[14px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid omnis atque at suscipit facilis fuga placeat. Molestiae praesentium beatae impedit.</p>
                  </div>
               </div>
            </div>
         </div>
         {/* Mentor */}
         <div className="bg-lighter-grey flex justify-center py-[30px] gap-[50px] items-center">
            <img src={Person} className="w-[140px] rounded-full" />
            <div className="max-w-[600px] flex flex-col gap-[3px]">
               <h3 className="text-[19px] font-medium text-black">Angela Hadid</h3>
               <p className="text-[14px] text-light-grey">Expert in Design Development & Production Colsulting</p>
               <p className="text-[14px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum autem nisi vitae nam veritatis explicabo, nostrum et dicta libero at sunt eum ex, sapiente dolores, veniam repellat accusantium soluta! Fuga.</p>
            </div>
         </div>
         {/* Pricing */}
         <div className="container mx-auto py-[30px]">
            <h3 className="text-center text-[25px] font-semibold text-black">Saatnya Investasi Ilmu</h3>
            <div className="row flex gap-2 justify-center mt-[30px]">
               <CardPayment />
               <CardPayment />
               <CardPayment />
            </div>
         </div>
         {/* Syllabus */}
         <div className="div bg-lighter-grey mt-[20px] py-[30px]">
            <div className="container mx-auto flex gap-[20px]">
               <Syllabus />
               <div className="w-full flex flex-col gap-[20px]">
                  <div className="col">
                     <p className="text-[15px] font-medium mb-[5px]">Perlengkapan yang Diperlukan</p>
                     <ul className="list-disc text-[14px] ml-[40px] flex flex-col gap-[3px]">
                        <li>Internet Connection</li>
                        <li>Zoom</li>
                        <li>Laptop</li>
                     </ul>
                  </div>
                  <div className="col">
                     <p className="text-[15px] font-medium mb-[5px]">Important Notes</p>
                     <ul className="list-disc text-[14px] ml-[40px] flex flex-col gap-[3px]">
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, reiciendis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, amet.</li>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas debitis itaque, fugit sequi obcaecati culpa.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officiis ratione at? Autem commodi qui illo earum.</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default EventDetail
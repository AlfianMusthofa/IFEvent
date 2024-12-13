import Sparkle from '../../assets/icons/sparkle.png'
import Button from "./Button"

const CardPayment = () => {
   return (
      <>
         <div className="border max-w-[290px] p-[10px] rounded-[7px]">
            <p className="text-[15px]">Basic</p>
            <p className="text-[13px] text-light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsam?</p>
            <h1 className="my-[10px] text-[27px] text-blue font-semibold">Rp 145.000</h1>
            <p className="text-[13px] text-light-grey">What's Included?</p>
            <div className="my-[10px] flex flex-col gap-[6px]">
               <div className="flex items-center gap-[5px]">
                  <img src={Sparkle} className="w-[15px]" />
                  <p className="text-[12px]">Zoom Exclusive</p>
               </div>
               <div className="flex items-center gap-[5px]">
                  <img src={Sparkle} className="w-[15px]" />
                  <p className="text-[12px]">Class Record</p>
               </div>
               <div className="flex items-center gap-[5px]">
                  <img src={Sparkle} className="w-[15px]" />
                  <p className="text-[12px]">Modul</p>
               </div>
               <div className="flex items-center gap-[5px]">
                  <img src={Sparkle} className="w-[15px]" />
                  <p className="text-[12px]">Discussion Grup</p>
               </div>
               <div className="flex items-center gap-[5px]">
                  <img src={Sparkle} className="w-[15px]" />
                  <p className="text-[12px]">E-Certificate</p>
               </div>
            </div>
            <Button />
         </div>
      </>
   )
}

export default CardPayment
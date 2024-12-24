const Form = () => {
   return (
      <>
         <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="container mx-auto flex border p-[15px]">
               <div className="col flex flex-col gap-[10px] w-[430px]">
                  <div className="border flex flex-col gap-[8px]">
                     <label className="text-[14px]" htmlFor="eventName">Event Name</label>
                     <input type="text" name="eventName" id="eventName" className="border text-[14px] p-[5px]" />
                  </div>
                  <div className="border flex flex-col gap-[8px]">
                     <label className="text-[14px]" htmlFor="eventDate">Event Date</label>
                     <input type="date" name="eventDate" id="eventDate" className="border text-[14px] p-[5px]" />
                  </div>
                  <div className="border flex flex-col gap-[8px]">
                     <label className="text-[14px]" htmlFor="reason">Reasons to Join This Class</label>
                     <textarea name="reason" id="reason" className="border"></textarea>
                  </div>
                  <div className="border flex flex-col gap-[8px]">
                     <label className="text-[14px]" htmlFor="reason">What Will You Learn in This Class</label>
                     <div className="flex flex-col gap-[5px]">
                        <div className="flex flex-col">
                           <label className="text-[13px]" htmlFor="">Topic 1</label>
                           <input type="text" name="title-topic-1" id="" className="border p-[5px] mb-[4px]" />
                           <textarea name="topic" id="topic" className="border p-[5px] text-[14px]"></textarea>
                        </div>
                        <div className="flex flex-col">
                           <label className="text-[13px]" htmlFor="">Topic 2</label>
                           <input type="text" name="title-topic-2" id="" className="border p-[5px] mb-[4px]" />
                           <textarea name="topic" id="topic" className="border p-[5px] text-[14px]"></textarea>
                        </div>
                        <div className="flex flex-col">
                           <label className="text-[13px]" htmlFor="">Topic 3</label>
                           <input type="text" name="title-topic-3" id="" className="border p-[5px] mb-[4px]" />
                           <textarea name="topic" id="topic" className="border p-[5px] text-[14px]"></textarea>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Form
import { Locate, Mail, Phone } from "lucide-react";
import { useContact } from "../hooks/useContact";

const ContactSection = () => {
  const { form, handleChange, sendMessage } = useContact();

  return (
    <>
      <div className="max-w-[1029px] mx-auto my-[60px] flex">
        {/*LEFT*/}
        <div className="flex-1">
          <h1 className="text-[13px]">Contact</h1>
          <h1 className="text-[26px] font-medium">
            How can we help you today?
          </h1>
          <p className="text-[14px] text-gray-500 w-[270px] my-3">
            Our dedicated learners support team is just a message or call away.
          </p>
          <div className="flex flex-col gap-2 mt-6">
            <div className="flex items-center gap-2">
              <div className="bg-gray-200 px-[7px] py-[3px] rounded-full">
                <Mail color="black" width={16} />
              </div>
              <h2 className="text-[14px] tracking-wide font-medium">
                ElevateHub@education.com
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-200 px-[7px] py-[3px] rounded-full">
                <Phone color="black" width={16} />
              </div>
              <h2 className="text-[14px] tracking-wide font-medium">
                +62 851-6666-3333
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-200 px-[7px] py-[3px] rounded-full">
                <Locate color="black" width={16} />
              </div>
              <h2 className="text-[14px] tracking-wide font-medium">
                St. Margahayu Citra, Jakarta, Indonesia
              </h2>
            </div>
          </div>
        </div>
        {/*RIGHT*/}
        <div className="flex-1">
          {/*Form*/}
          <div className="border border-gray-200 p-5 rounded-lg bg-gray-50">
            {/*firstname lastname*/}
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <p className="text-[14px]">Name</p>
                <input
                  type="text"
                  className="border p-[7px] text-[14px] w-full rounded-[6px] mt-[7px]"
                />
              </div>
              <div className="flex-1">
                <p className="text-[14px]">Phone</p>
                <input
                  type="text"
                  className="border p-[7px] text-[14px] w-full rounded-[6px] mt-[7px]"
                />
              </div>
            </div>
            <div className="mt-3">
              <p className="text-[14px]">Email*</p>
              <input
                type="text"
                className="border p-[7px] text-[14px] w-full rounded-[6px] mt-[7px]"
              />
            </div>
            <div className="mt-3">
              <p className="text-[14px]">Message*</p>
              <textarea
                placeholder="Enter a question, feedback, or suggestion..."
                className="rounded-[6px] border w-full resize-none text-[14px] p-[7px] mt-[7px] h-[100px]"
              ></textarea>
            </div>
            <button
              // onClick={sendMessage}
              className="rounded-[6px] text-[14px] bg-yellow-primer w-full py-2 mt-3 tracking-wide font-medium"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;

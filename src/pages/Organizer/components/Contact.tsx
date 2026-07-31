import { Mail, MapPin, Phone, Webhook } from "lucide-react";

interface ContacProp {
  email: string;
  phone: string;
  website: string;
  location: string;
}

const Contact = ({ email, location, phone, website }: ContacProp) => {
  return (
    <div className="border  p-3 rounded-[6px] mb-2.5">
      <h1 className="text-[15px] font-medium mb-1.5">Contact Organizer</h1>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Mail width={17} />
          <p className="text-[14px] mt-[1px]">{email}</p>
        </div>
        <div className="flex items-center gap-2">
          <Phone width={17} />
          <p className="text-[14px] mt-[1px]">{phone}</p>
        </div>
        <div className="flex items-center gap-2">
          <Webhook width={17} />
          <p className="text-[14px] mt-[1px]">{website}</p>
        </div>
        <div className="flex items-center gap-2">
          <MapPin width={17} />
          <p className="text-[14px] mt-[1px]">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

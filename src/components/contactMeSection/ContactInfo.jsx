import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="007cryptic@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+880 1633 247472" Image={FiPhone} />
      <SingleInfo text="Sreemangal, Sylhet, Bangladesh" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;

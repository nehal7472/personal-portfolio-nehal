import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/ahsanul-haque-nehal-a94664219/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/nehal7472" Icon={FiGithub} />
      <SingleContactSocial link="https://www.facebook.com/cryptic.nehal.9/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;

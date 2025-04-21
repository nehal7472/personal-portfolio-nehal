import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import EmailImage from "/images/EmailImage.png";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img src={EmailImage} alt="email image" className="max-w-[300px]" />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;

import { useSelector } from "react-redux";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      id="contact"
      className={`max-w-full  mx-auto items-center justify-center pt-[100px] px-4 transition-all duration-300 ${
        theme === "dark" ? "bg-animated-dark" : "bg-animated-light"
      }`}
    >
      <h2 className="text-6xl text-cyan-500 dark:text-cyan-300 pb-10 text-center">
        Contact Me
      </h2>
      <div className="flex px-4 md:px-20 justify-between gap-24 bg-brown-500 dark:bg-gray-800 p-8 rounded-2xl lg:flex-row sm:flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;

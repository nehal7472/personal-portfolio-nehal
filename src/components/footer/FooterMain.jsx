import { Link } from "react-scroll";
import { useSelector } from "react-redux";

const FooterMain = () => {
  const theme = useSelector((state) => state.theme.theme);

  const footerLinks = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Experience", section: "experience" },
    { name: "Projects", section: "projects" },
  ];

  return (
    <div
      className={`px-4 transition-all duration-300 pt-24 ${
        theme === "dark" ? "bg-animated-dark" : "bg-animated-light"
      }`}
    >
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-lightGrey">Ahsanul Haque</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 pb-12 text-sm text-lightGrey">
        © 2025 AhsanulHaque | All Rights Reserved.``
      </p>
    </div>
  );
};

export default FooterMain;

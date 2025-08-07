import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import ThemeToggle from "../Theme/ThemeToggle";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <ul
      className={`flex lg:flex-row sm:flex-col gap-6 font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:w-full py-4 items-center backdrop-blur-lg
        ${
          theme === "dark"
            ? "bg-transparent text-white"
            : "bg-transparent text-orange"
        }
      `}
    >
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            to={link.section}
            className={`cursor-pointer transition-all duration-500 hover:text-cyan
              ${
                theme === "dark"
                  ? "text-white"
                  : "text-orange"
              }
            `}
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
      <ThemeToggle />
    </ul>
  );
};

export default NavbarLinks;

import { useEffect } from "react";
import { useSelector } from "react-redux";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const theme = useSelector((state) => state.theme.theme);

  // Apply dark/light class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-1/2 -translate-x-1/2 z-20 flex gap-4 mt-2">
      <div
        className={`flex justify-between w-full max-w-[1200px] mx-auto items-center px-6 py-2 rounded-full
          border-[0.5px]
          ${
            theme === "dark"
              ? "bg-black border-orange"
              : "bg-animated-light border-orange"
          }
        `}
      >
        <NavbarLogo />

        {/* Navbar Links: visible on lg, toggleable on sm */}
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>

      {/* Hamburger Menu Button for small screens */}
      <div
        className={`flex lg:hidden sm:block p-4 items-center justify-center rounded-full border-[0.5px]
          ${
            theme === "dark"
              ? "bg-black border-orange text-orange"
              : "bg-animated-light border-orange text-orange"
          }
        `}
      >
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;

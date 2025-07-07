import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const NavLightDark = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <li>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full border-2 border-darkCyan 
                   bg-gradient-to-tr from-darkCyan to-orange 
                   hover:from-orange hover:to-darkCyan
                   text-white shadow-lg transition-all duration-500 
                   ease-in-out transform hover:scale-110 hover:shadow-xl
                   flex items-center justify-center group"
        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <FiMoon className="text-white text-xl transition-transform duration-500 group-hover:rotate-[20deg]" />
        ) : (
          <FiSun className="text-white text-xl transition-transform duration-500 group-hover:rotate-[90deg] scale-110" />
        )}
      </button>
    </li>
  );
};

export default NavLightDark;

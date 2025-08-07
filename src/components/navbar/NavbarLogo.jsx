import { useSelector } from "react-redux";

const NavbarLogo = () => {
  const theme = useSelector((state) => state.theme.theme); // Get current theme

  return (
    <div>
      {/* Full name for medium and above */}
      <h1
        className={`text-2xl sm:hidden md:block ${
          theme === "dark" ? "text-white" : "text-orange"
        }`}
      >
        Asanul{" "}
        <span className={theme === "dark" ? "text-white" : "text-darkCyan"}>
          Haque
        </span>
      </h1>

      {/* Short initials for small screens only */}
      <h1 className="dark:text-white text-darkCyan font-special font-extrabold text-4xl md:hidden sm:block">
        AH
      </h1>
    </div>
  );
};

export default NavbarLogo;

import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme); // Get current theme

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <button
      onClick={setToggleMenu}
      className={`text-2xl p-2 border rounded-full transition-colors duration-300
        ${
          theme === "dark"
            ? "text-white border-cyan hover:bg-cyan/20"
            : "text-black border-orange hover:bg-orange/20"
        }
      `}
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;

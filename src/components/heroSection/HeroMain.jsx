import { useSelector } from "react-redux";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import { useEffect } from "react";

const HeroMain = () => {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    // Ensure 'dark' class is applied to <html> for Tailwind to detect dark mode
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <section
      className={`pt-40 pb-24 relative transition-colors duration-300 ${
        theme === "dark" ? "bg-animated-dark" : "bg-animated-light"
      }`}
    >
      <div className="flex flex-col-reverse md:flex-row max-w-[1200px] mx-auto justify-between items-center px-6 gap-12">
        <HeroText />
        <HeroPic />
      </div>
    </section>
  );
};

export default HeroMain;

import { useSelector } from "react-redux";
import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeMain = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-animated-dark" : "bg-animated-light"
      }`}
    >
      <div
        id="about"
        className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto py-[100px] justify-between items-center transition-all duration-300"
      >
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <AboutMeText />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <AboutMeImage />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeMain;

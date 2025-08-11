import { useSelector } from "react-redux";
import AllExperiences from "./AllExperiences";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ExperienceMain = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      id="experience"
      className={`py-[20px] md:py-[100px] max-w-full mx-auto px-10 transition-all duration-300 ${
        theme === "dark" ? "bg-animated-dark" : "bg-animated-light"
      }`}
    >
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceText />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceTop />
      </motion.div>
      <div
        className={`w-full h-1 mt-8 bg-lightBrown dark:bg-gray-600 lg:block sm:hidden ${
          theme === "dark" ? "bg-grey" : "bg-darkCyan"
        }`}
      ></div>
      <AllExperiences />
    </div>
  );
};

export default ExperienceMain;

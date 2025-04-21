import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";
import AboutMe from "/images/HexaPic.png";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative flex items-center justify-center w-full max-w-md"
    >
      <img
        src={AboutMe}
        alt="Ahsanul Haque"
        className="w-full max-h-[450px] object-contain relative z-10 rounded-xl shadow-xl"
        loading="lazy"
      />

      <div className="absolute inset-0 flex items-center justify-center z-0">
        <PiHexagonThin className="h-[90%] w-[90%] text-cyan/30 blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;

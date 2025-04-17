import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Resume from "../../assets/resume.pdf";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-6 h-full justify-center md:text-left text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-xl lg:text-2xl uppercase text-lightGrey tracking-wide"
      >
        MERN-Stack Web Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-orange leading-tight"
      >
        Ahsanul Haque <br className="hidden md:block" />
        Nehal
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-lg text-muted mt-2 leading-relaxed"
      >
        Passionate Web Developer & Instructor <br className="hidden sm:block" />
        with 3+ years of experience.
      </motion.p>

      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 flex justify-center md:justify-start gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-orange text-white rounded-full hover:bg-orange-dark transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-orange text-orange rounded-full hover:bg-orange hover:text-white transition"
        >
          Contact Me
        </a>
        <a
          href={Resume}
          download={Resume}
          className="px-6 py-3 border border-orange text-orange rounded-full hover:bg-orange hover:text-white transition"
        >
          Download CV
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;

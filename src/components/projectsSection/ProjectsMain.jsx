import { useSelector } from "react-redux";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Personal Portfolio",
    year: "Mar2021",
    align: "right",
    image: "/images/WebsiteImg01.png",
    link: "https://xenodochial-swirles-89753f.netlify.app/",
  },
  {
    name: "Bookstore e-commerce",
    year: "Sept2024",
    align: "left",
    image: "/images/WebsiteImg02.png",
    link: "https://github.com/nehal7472/BookStore-Using-MERN",
  },
  {
    name: "Blog Website",
    year: "Fab2025",
    align: "right",
    image: "/images/WebsiteImg06.png",
    link: "https://simple-blogs-flax.vercel.app/",
  },
  {
    name: "Find Pokemon!",
    year: "Jan2024",
    align: "left",
    image: "/images/WebsiteImg03.png",
    link: "https://nehal-find-pokemon.netlify.app/",
  },
  {
    name: "Todo List",
    year: "May2023",
    align: "right",
    image: "/images/WebsiteImg04.png",
    link: "https://nehaltodo.netlify.app/",
  },
  {
    name: "Wall Clock",
    year: "May2022",
    align: "left",
    image: "/images/WebsiteImg05.png",
    link: "https://nehal7472.github.io/Wall-Clock/",
  },
];

const ProjectsMain = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      id="projects"
      className={`max-w-full mx-auto py-[20px] md:py-[100px] px-4 md:px-24 transition-all duration-300 ${
        theme === "dark" ? "bg-animated-dark" : "bg-animated-light"
      }`}
    >
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;

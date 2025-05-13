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
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
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

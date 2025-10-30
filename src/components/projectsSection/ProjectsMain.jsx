import { useState } from "react";
import { useSelector } from "react-redux";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Suddhi",
    year: "October2025",
    align: "right",
    image: "/images/WebsiteImg18.png",
    link: "https://edupybd.com/",
  },
  {
    name: "GyanPeon",
    year: "September2025",
    align: "left",
    image: "/images/WebsiteImg17.png",
    link: "https://www.gyanpeon.com/",
  },
  {
    name: "KarmaGram",
    year: "September2025",
    align: "right",
    image: "/images/WebsiteImg16.png",
    link: "https://github.com/nehal7472",
  },
  {
    name: "Book-Store",
    year: "July2025",
    align: "left",
    image: "/images/WebsiteImg09.png",
    link: "https://nehal-bookstore.vercel.app/",
  },
  {
    name: "E-commerce",
    year: "July2025",
    align: "right",
    image: "/images/WebsiteImg08.png",
    link: "https://functional-ecommerce-react.vercel.app/",
  },
  {
    name: "Professional Dashboard",
    year: "July2025",
    align: "left",
    image: "/images/WebsiteImg07.png",
    link: "https://e-commerce-admin-dashboard-topaz.vercel.app",
  },
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
  {
    name: "Simple-ecommerce",
    year: "August2025",
    align: "right",
    image: "/images/WebsiteImg10.png",
    link: "https://redux-project-chi-vert.vercel.app/",
  },
  {
    name: "Simple-ecommerce",
    year: "May2025",
    align: "left",
    image: "/images/WebsiteImg11.png",
    link: "https://e-commerce-shoe-nehal.netlify.app/",
  },
  {
    name: "Simple-portfolio",
    year: "Jan2025",
    align: "right",
    image: "/images/WebsiteImg12.png",
    link: "https://simple-portfolio-nehal.netlify.app/",
  },
  {
    name: "Educational Consultancy",
    year: "Oct2024",
    align: "left",
    image: "/images/WebsiteImg13.png",
    link: "https://educational-colsutancy.netlify.app/",
  },
  {
    name: "Blog Website",
    year: "Dec2024",
    align: "right",
    image: "/images/WebsiteImg14.png",
    link: "https://simple-blogs-flax.vercel.app/",
  },
  {
    name: "secure-dice-simulator-game",
    year: "June2024",
    align: "left",
    image: "/images/WebsiteImg15.png",
    link: "https://github.com/nehal7472/secure-dice-simulator-game",
  },
];

const ProjectsMain = () => {
  const theme = useSelector((state) => state.theme.theme);
  const [showAll, setShowAll] = useState(false);

  // Show first 4 projects if not expanded
  const projectsToShow = showAll ? projects : projects.slice(0, 4);

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
        {projectsToShow.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>

      {projects.length > 4 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:from-gray-700 hover:to-gray-900 hover:shadow-2xl border border-gray-500"
          >
            {showAll ? "Hide" : "See More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsMain;

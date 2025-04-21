import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Fiver",
    date: "2021 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Assistant Engineer",
    company: "Amber IT",
    date: "2022 - 2024",
    responsibilities: [
      "Router & Switch configurations including LAN, WAN, VLAN.",
      "RIP, RIPv2, OSPF, NAT, EIGRP, BGP,ACLs, Bridging, NLB.",
      "NLB, IP Addressing, IP subnetting,Troubleshooting IP on CISCO.",
    ],
  },
  {
    job: "Back-end Developer",
    company: "Fiver",
    date: "2024 - Present",
    responsibilities: [
      "Node JS, Express JS, RESTful APIs, GraphQL.",
      "User Authentication (JWT, OAuth).",
      "Mongo DB, Mongoose, Firebase.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;

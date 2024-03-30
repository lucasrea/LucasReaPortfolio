import {forwardRef} from "react";
import {
  FaReact,
  SiDocker,
  TbBrandMongodb,
} from "./Icons";
import ScrollButton from "./ScrollButton";
import SkillCard from "./SkillCard";

import {motion} from "framer-motion";
import {staggerContainer, textVariant} from "../constants/motion";
import { SiJavascript, SiMysql, SiNumpy, SiPandas, SiPytorch } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { BsGit } from "react-icons/bs";

const skillset = [
  {
    title: "Python",
    icon: FaPython,
    exp: "Pro",
    animationDelay: "1.8",
  },
  {
    title: "JS",
    icon: SiJavascript,
    exp: "Pro",
    animationDelay: "1.8",
  },
  {
    title: "React",
    icon: FaReact,
    exp: "Intermediate",
    animationDelay: "0.2",
  },
  {
    title: "SQL",
    icon: SiMysql,
    exp: "Pro",
    animationDelay: "1",
  },
  {
    title: "Mongo",
    icon: TbBrandMongodb,
    exp: "Pro",
    animationDelay: "1",
  },
  {
    title: "Docker",
    icon: SiDocker,
    exp: "Beginner",
    animationDelay: "1.8",
  },
  {
    title: "PyTorch",
    icon: SiPytorch,
    exp: "Intermediate",
    animationDelay: "1.8",
  },
  {
    title: "Pandas",
    icon: SiPandas,
    exp: "Pro",
    animationDelay: "1.8",
  },
  {
    title: "Numpy",
    icon: SiNumpy,
    exp: "Intermediate",
    animationDelay: "1.8",
  },
  {
    title: "Git",
    icon: BsGit,
    exp: "Pro",
    animationDelay: "1.8",
  },


];

const Skills = forwardRef(({skillRef}, ref) => {
  return (
    <section
      ref={skillRef}
      className="relative skill-bg
      flex flex-col gap-5 justify-center lg:justify-start items-center
      h-screen pt-20 [border-radius:5rem] m-5
      bg-gradient-to-b from-secondary to-[#9fb0d2] dark:from-[#232323] dark:to-[#232323]"
    >
      <div className="-z-10 bg-wave-white dark:bg-wave-black absolute -top-5 min-w-full min-h-full bg-no-repeat bg-cover"></div>
      <motion.div variants={textVariant(0.1)} initial="hidden" whileInView="show">
        <h2 className="z-50 text-4xl text-white text-left font-bold flex justify-center  uppercase">
          Highlighted Skills
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.5, 0.5)}
        initial={"hidden"}
        whileInView={"show"}
        className="grid portrait:grid-cols-5 portrait:gap-3  md:grid-cols-5 md:gap-15 sm:grid-cols-5 sm:gap-5 ease-in transition duration-300"
        style={{ rowGap: "150px", marginTop:"50px" }} // Adjust the value as needed
      >
        {skillset.map((skill, index) => (
          <SkillCard key={skill.title} title={skill.title} yoe={skill.exp} Icon={skill.icon} index={index} />
        ))}
      </motion.div>

      <ScrollButton isLight={true} ref={ref} />
    </section>
  );
});

export default Skills;

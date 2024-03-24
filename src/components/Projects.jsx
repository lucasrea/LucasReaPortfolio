import {motion} from "framer-motion";
import {forwardRef} from "react";
import {textVariant} from "../constants/motion";
import CardSlider from "./CardSlider/CardSlider";
import ScrollButton from "./ScrollButton";
import { projects } from "../constants/projectList";

const Projects = forwardRef(({projectsRef}, ref) => {
  return (
    <section
      ref={projectsRef}
      className="relative project-bg
                flex flex-col gap-10 justify-center lg:justify-start items-center
                h-screen pt-20 [border-radius:5rem] m-5
                bg-gradient-to-b from-secondary to-[#9fb0d2] dark:from-[#232323] dark:to-[#232323]"
    >
      <motion.div variants={textVariant(0.1)} initial="hidden" whileInView="show">
        <h2 className="z-50 text-4xl text-primary dark:text-white font-bold flex justify-center items-center uppercase">
          Projects
        </h2>
      </motion.div>
      <div className="h-full md:w-[94%] w-[75%] flex items-center justify-center md:max-h-screen">
        <CardSlider iterables={projects}/>
      </div>
      <ScrollButton ref={ref} isLight={true} />
    </section>
  );
});

export default Projects;

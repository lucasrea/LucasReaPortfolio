import {motion} from "framer-motion";
import {forwardRef} from "react";
import {textVariant} from "../constants/motion";
import CardSlider from "./CardSlider/CardSlider";
import ScrollButton from "./ScrollButton";
import { jobs } from "../constants/experienceList";


const Experience = forwardRef(({experienceRef}, ref) => {
    return (
      <section
        ref={experienceRef}
        className="relative experience-bg
                  flex flex-col gap-10 justify-center lg:justify-start items-center
                  h-screen pt-20 [border-radius:5rem] m-5
                  bg-gradient-to-b from-secondary to-[#9fb0d2] dark:from-[#232323] dark:to-[#232323]"
      >
          {/* <h2 className="z-50 text-4xl text-primary dark:text-[#232323] font-bold flex justify-center items-center uppercase">
            Experience
          </h2> */}
          <div
            className="text-xl 
            lg:text-7xl
             uppercase font-bold 
             bg-clip-text 
             bg-gradient-to-r from-secondary to-tertiary 
             " // Add a custom class for terminal font
          >
          {/* <span style={{"font-family":"Avenir",  "color" : "#eb4034"}}>
            Experience 
          </span> */}
        <motion.div variants={textVariant(0.1)} initial="hidden" whileInView="show">
          <h2 className="z-50  text-left font-bold flex justify-center  uppercase">
          <span style={{"font-family":"Avenir",  "color" : "#ba3a32"}}>
            Experience 
          </span>           
          </h2>
        </motion.div>
          
        </div>
        <div className="h-full md:w-[94%] w-[75%] flex items-center justify-center md:max-h-screen">
          <CardSlider iterables={jobs}/>
        </div>
        <ScrollButton ref={ref} isLight={true} />
      </section>
    );
  });
export default Experience;
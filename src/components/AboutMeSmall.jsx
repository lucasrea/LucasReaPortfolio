import {motion} from "framer-motion";
import {forwardRef} from "react";

import bnwPic from "../assets/bnwPic.jpeg";
import pic from "../assets/pic.png";

import {slideIn, textVariant} from "../constants/motion";
import ScrollButton from "./ScrollButton";

const AboutMeSmall = forwardRef(({aboutMeRef}, ref) => {
  return (
        <motion.div
          variants={slideIn("down", "", 0, 1)}
          initial={"hidden"}
          whileInView={"show"}
          className="z-10
          bg-opacity-30
          bg-white
          relative 
          dark:bg-[#232323]-bg-opacity-30
          dark:text-white w-[70%] 
          portrait:w-[150%] 
          lg:w-[80%]
          mx-auto 
          translate-y-24
          shadow-lg 
          dark:shadow-[#232323] 
          rounded-xl 
          flex 
          flex-col 
          md:flex-row 
          justify-center 
          items-center 
          md:drop-shadow-lg"
          style={{ marginRight: '50px', marginTop: `10px` }}
        >
          <div className="flex justify-center items-end md:items-center md:justify-start p-1">
            <img src={pic} className="block dark:hidden md:w-48 md:h-64 w-40 h-10 rounded-xl" />
            <img src={pic} className="hidden dark:block md:w-48 md:h-64 w-40 h-10 rounded-xl" />
          </div>
          <div className="p-5 md:w-full">
            <div className="text-lg leading-9  text-white">
              <span>
                 Welcome to my page!
              </span>
            </div>
          </div>
        </motion.div>

  );
});

export default AboutMeSmall;

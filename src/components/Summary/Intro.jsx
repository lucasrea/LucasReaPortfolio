import React from "react";
import {motion} from "framer-motion";
import {slideIn} from "../../constants/motion";
import {AiFillHeart, BsAmd} from "../Icons";
import Typed from "react-typed";
import SocialMediaButtons from "../SocialMediaButtons";

const Intro = () => {
  return (
    <>
      <motion.div
        variants={slideIn("left", "spring", 0.5, 0.5)}
        initial={"hidden"}
        whileInView={"show"}
        className="w-full flex flex-col justify-center items-center md:items-start gap-2"
      >
        <div className="text-xl lg:text-2xl text-gray-500 font-normal text-white">
          <span style={{"font-family":"Courier"}}>Hello World</span>  
        </div>
        <div className="text-xl lg:text-2xl text-gray-500 font-normal text-white">
          <span>I'm</span>  
        </div>        
        <div
          className="text-xl lg:text-7xl
             uppercase font-bold 
             bg-clip-text 
             bg-gradient-to-r from-secondary to-tertiary text-transparent
             monospace" // Add a custom class for terminal font
        >
          <span style={{"font-family":"Monospace"}}>Lucas Rea</span>
        </div>
        <div className="text-lg uppercase tracking-[0.10rem] text-white font-semibold">
          Software Development Engineer @ AMD
        </div>
        <div className="text-xl flex justify-center items-center md:justify-start w-full text-white">
          <span className="flex items-center justify-center font-bold">
            I <AiFillHeart className="ml-2 text-red-600" />
          </span>
          <Typed
            className="font-bold md:pl-3 pl-2 text-gray-500 text-white"
            strings={["Software Development", "Artificial Intelligence","Soccer", "Coding", "Machine Learning", "Data", "Collaboration", "Video Games"]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </div>
      </motion.div>
      <motion.div className="flex md:justify-start justify-center item-center w-full">
        <SocialMediaButtons />
      </motion.div>
    </>
  );
};

export default Intro;

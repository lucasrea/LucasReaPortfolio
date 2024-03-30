import React from "react";
import {BsGithub, BsLinkedin, MdDownloadForOffline} from "./Icons";
import resume from "../assets/resume.pdf"
import {motion} from "framer-motion";
import {colorCodeContainer, fadeInRotateX} from "../constants/motion";

const SocialMediaButtons = () => {
  return (
    <motion.div
      variants={colorCodeContainer()}
      initial="hidden"
      whileInView="show"
      className="flex gap-5 justify-center items-center"
    >
      <motion.a
        variants={fadeInRotateX()}
        href="https://github.com/lucasrea"
        className="rounded-xl w-10 h-10 p-1"
        target="_blank"
      >
        <BsGithub
          className="text-lg md:text-2xl
                   text-tertiary text-white
                    rounded-md w-8 h-8 hover:scale-110 duration-200 cursor-pointer"
          title="Github Profile"
        />
      </motion.a>
      <motion.a
        variants={fadeInRotateX()}
        href="https://www.linkedin.com/in/lucasrea"
        target="_blank"
      >
        <BsLinkedin
          className="text-lg md:text-2xl
                   text-tertiary dark
                    rounded-md w-8 h-8 hover:scale-110 duration-200 cursor-pointer"
          title="LinkedIn Profile"
        />
      </motion.a>
      <motion.a variants={fadeInRotateX()} href={resume} download className="w-lg">
        <MdDownloadForOffline
          className="text-xl md:text-5xl
                   text-tertiary text-white
                    rounded-md w-10 h-10 hover:scale-110 hover:w-full duration-200 cursor-pointer"
          title="Resume Download"
        />
      </motion.a>
    </motion.div>
  );
};

export default SocialMediaButtons;

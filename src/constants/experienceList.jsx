import {
    FaReact,
    BsAmd,
  } from "../components/Icons";
  import React from "react";
  import convexLogo from "../assets/convex-logo.svg";
  import clerkLogo from "../assets/clerk.svg";
  import togetherAILogo from "../assets/together.ai.svg";
import { SiCplusplus, SiFlask, SiIbmcloud, SiJavascript, SiMongodb, SiMysql, SiSqlite } from "react-icons/si";
import { FaApple, FaDocker, FaFlask, FaJenkins, FaPython } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
  
  const Convex = () => {
    return <img alt="Convex logo" src={convexLogo} className="w-5 h-5 grayscale" />;
  };
  
  const TogetherAI = () => {
    return <img alt="Together.ai logo" src={togetherAILogo} className="w-5 h-5 grayscale" />;
  };
  
  const Clerk = () => {
    return <img alt="Clerk logo" src={clerkLogo} className="w-5 h-5" />;
  };
  
  export const jobs = [
    {
      title:  {icon: <BsAmd />, name:"AMD"},
      role:  "Sr. SDE",
      dates: {dates: <span style={{ color: 'red' }}>Sept. 2022 - present</span>},
      description: `DESC`,
      techStack: [
        {name: "React", icon: <FaReact className="text-xl" />},
        {name: "Javascript", icon: <SiJavascript className="text-xl" />},
        {name: "Flask", icon: <SiFlask className="text-xl" />},
        {name: "Python", icon: <FaPython className="text-xl" />},
        {name: "MongoDB", icon: <SiMongodb className="text-xl" />},
        {name: "Docker", icon: <FaDocker className="text-xl" />},
      ],
    },
    {
      title:  {icon: <BsAmd />, name:"AMD"},
      role:  "SDE 2",
      dates: "May 2021 - Sept. 2022",
      description: `DESC`,
      techStack: [
        {name: "Python", icon: <FaPython className="text-xl" />},
        {name: "MongoDB", icon: <SiMongodb className="text-xl" />},
        {name: "Jenkins", icon: <FaJenkins className="text-xl" />},
        {name: "IBM Cloud", icon: <SiIbmcloud className="text-xl" />},
      ],
    },
    {
      title:  {icon: <BsAmd />, name:"AMD"},
      role:  "SDE Internship",
      dates: "May 2019 - May. 2020",
      description: `DESC`,
      techStack: [
        {name: "Python", icon: <FaPython className="text-xl" />},
        {name: "SQL", icon: <SiMysql className="text-xl" />},
        {name: "C++", icon: <SiCplusplus className="text-xl" />},
        {name: "MacOS", icon: <FaApple className="text-xl" />},
      ],
    },
  ];
  
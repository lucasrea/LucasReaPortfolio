import {
  SiOpenai,
  SiTailwindcss,
  FaCss3,
  AiOutlineEdit,
  SiFirebase,
  SiCodemirror,
  FaAws,
  FaCcStripe,
  FaReact,
  TbBrandThreejs,
  AiOutlineMail,
  SiFramer,
  SiNextdotjs,
} from "../components/Icons";
import React from "react";

import convexLogo from "../assets/convex-logo.svg";
import clerkLogo from "../assets/clerk.svg";
import togetherAILogo from "../assets/together.ai.svg";

const Convex = () => {
  return <img alt="Convex logo" src={convexLogo} className="w-5 h-5 grayscale" />;
};

const TogetherAI = () => {
  return <img alt="Together.ai logo" src={togetherAILogo} className="w-5 h-5 grayscale" />;
};

const Clerk = () => {
  return <img alt="Clerk logo" src={clerkLogo} className="w-5 h-5" />;
};

export const projects = [
  {
    title: {name:"EEG Artifact Detection"},
    description: `DESC`,
    // githubURL: "https://github.com/hardikverma22/travel-planner-ai",
    // liveURL: "https://travel-plannerai.vercel.app/",
    techStack: [
      
    ],
  },
  {
    title: {name : "Neural Network from Scratch"},
    description: `DESC`,
    // githubURL: "https://github.com/hardikverma22/travel-planner-ai",
    // liveURL: "https://travel-plannerai.vercel.app/",
    techStack: [
      
    ],
  },
  {
    title: {name: "Stock Market Data Science"},
    description: `DESC`,
    // githubURL: "https://github.com/hardikverma22/travel-planner-ai",
    // liveURL: "https://travel-plannerai.vercel.app/",
    techStack: [
      
    ],
  },
  {
    title: {name: "Portfolio Website"},
    description: `Portfolio website is built to showcase skills,
     projects and about me and react out many people.`,
    githubURL: "https://github.com/hardikverma22/CodeMe",
    liveURL: "https://code-me.netlify.app/",
    techStack: [
      {name: "React", icon: <FaReact className="text-xl" />},
      {name: "Tailwind CSS", icon: <SiTailwindcss className="text-xl" />},
      {name: "ThreeJS", icon: <TbBrandThreejs className="text-xl" />},
      {name: "EmailJS", icon: <AiOutlineMail className="text-xl" />},
      {name: "Framer Motion", icon: <SiFramer className="text-xl" />},
    ],
  },
];

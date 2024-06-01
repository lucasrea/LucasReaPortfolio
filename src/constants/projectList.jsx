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
import {
  SiJavascript,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FcScatterPlot } from "react-icons/fc";

const Convex = () => {
  return (
    <img alt="Convex logo" src={convexLogo} className="w-5 h-5 grayscale" />
  );
};

const TogetherAI = () => {
  return (
    <img
      alt="Together.ai logo"
      src={togetherAILogo}
      className="w-5 h-5 grayscale"
    />
  );
};

const Clerk = () => {
  return <img alt="Clerk logo" src={clerkLogo} className="w-5 h-5" />;
};

export const projects = [
  {
    title: { name: "EEG Artifact Detection" },
    description: `4th year undergraduate capstone project - aimed at using a recurrent CNN to detect EEG artifacts providing enhanced seizure detection.`,
    githubURL: "https://github.com/ChrisDryden/ECE496",
    techStack: [
      { name: "Python", icon: <FaPython className="text-xl" /> },
      { name: "Numpy", icon: <SiNumpy className="text-xl" /> },
      { name: "Pandas", icon: <SiPandas className="text-xl" /> },
      { name: "Tensorflow", icon: <SiTensorflow className="text-xl" /> },
      { name: "Matplotlib", icon: <FcScatterPlot className="text-xl" /> },
    ],
  },
  {
    title: { name: "Facial Expression Recognition" },
    description: `Custom CNN designed to classify a handful of facial expressions. Ingegated model to webcam for live inference.s`,
    techStack: [
      { name: "Python", icon: <FaPython className="text-xl" /> },
      { name: "Numpy", icon: <SiNumpy className="text-xl" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-xl" /> },
      { name: "Sklearn", icon: <SiScikitlearn className="text-xl" /> },
      { name: "Matplotlib", icon: <FcScatterPlot className="text-xl" /> },
      { name: "OpenCV", icon: <SiOpencv className="text-xl" /> },
    ],
  },
  {
    title: { name: "Neural Network from Scratch" },
    description: `Self educational project aimed at creating a fundamental ANN from scratch using Numpy. Training and testing done on MNIST handwritten digit dataset.`,
    githubURL: "https://github.com/lucasrea/neuralnet_scratch",
    articleURL:
      "https://medium.com/@lucas.rea1998/python-neural-networks-from-scratch-e302e7a200a1",
    techStack: [
      { name: "Python", icon: <FaPython className="text-xl" /> },
      { name: "Numpy", icon: <SiNumpy className="text-xl" /> },
    ],
  },
  {
    title: { name: "Stock Market Data Science" },
    description: `Data science project aimed at analyzing trends in stock market data via technical indicators. Use statistical methods to predict future trends.`,
    githubURL: "https://github.com/lucasrea/StockForecast",
    articleURL:
      "https://towardsdatascience.com/predicting-future-stock-market-trends-with-python-machine-learning-2bf3f1633b3c",
    techStack: [
      { name: "Python", icon: <FaPython className="text-xl" /> },
      { name: "Numpy", icon: <SiNumpy className="text-xl" /> },
      { name: "Pandas", icon: <SiPandas className="text-xl" /> },
      { name: "Sklearn", icon: <SiScikitlearn className="text-xl" /> },
      { name: "Matplotlib", icon: <FcScatterPlot className="text-xl" /> },
    ],
  },
  {
    title: { name: "Portfolio Website" },
    description: `Portfolio website is built to showcase skills,
     projects, and my experience.`,
    githubURL: "https://github.com/lucasrea/LucasReaPortfolio",
    techStack: [
      { name: "Javascript", icon: <SiJavascript className="text-xl" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-xl" /> },
      { name: "React", icon: <FaReact className="text-xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-xl" /> },
    ],
  },
];

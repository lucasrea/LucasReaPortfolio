import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../constants/motion";
import { useState, useEffect } from 'react';


const SkillCard = ({ title, yoe, Icon, index }) => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScreenSize('md'); // For medium screens and above
      } else if (width >= 640) {
        setScreenSize('sm'); // For small screens
      } else {
        setScreenSize('portrait'); // For portrait orientation or very small screens
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        max: 45,
        speed: 50,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.2, 0.75)}
        whileHover={{ scale: 1.3 }}
        className="group shadow-xl bg-gradient-to-b 
        portrait:w-14 portrait:h-14
        sm:w-18 sm:h-18
        md:w-28 md:h-28 
        from-[#2be4b9] to-[#EAECC6] rounded-[20px] shadow-card"
      >
        <div className=" text-black rounded-[20px] flex justify-center items-center flex-col gap-1 p-4">
          <Icon className="sm:text md:text-4xl text-3xl text-black group-hover:text-primary" />

         {["sm", "md"].includes(screenSize) &&  <h3 className="text-primary 
          portrait:text-size-5
          sm:text-xs
          md:text-base
          text-wrap
          text-center group-hover:flex text-xs w-full justify-center items-center">
            {title}
          </h3>}
          {screenSize==="md" &&<h3 className="text-primary font-bold text-center group-hover:flex text-xs w-full justify-center items-center">
            {yoe}
          </h3> }
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SkillCard;

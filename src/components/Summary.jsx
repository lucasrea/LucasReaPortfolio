import {motion, useInView} from "framer-motion";
import {forwardRef} from "react";
import Typed from "react-typed";
import {slideIn} from "../constants/motion";
import {AiFillHeart} from "./Icons";
import ScrollButton from "./ScrollButton";
import SocialMediaButtons from "./SocialMediaButtons";
// import Code from "./Summary/Code";
// import ColorCodes from "./Summary/ColorCodes";
import Intro from "./Summary/Intro";
import MyTimeline from "./MyTimeline";
import AboutMe from "./AboutMe";
import AboutMeSmall from "./AboutMeSmall";

const Summary = forwardRef(({summaryRef}, ref) => {
  const isInView = useInView(summaryRef);

  return (
    <>
      <section ref={summaryRef} >
        {/* landscape */}
        <div
          className="portrait:hidden
                    mt-24 lg:mt-0 md:px-14 px-5
                    z-100 w-full h-screen 
                    flex flex-col md:flex-row items-center justify-center gap-6
                    overflow-y-hidden
                    summary-bg"
          
        >
          <div
            className="flex flex-col gap-4 items-center justify-center md:justify-end
                          pt-14 md:pt-0 md:w-[50%]"
          >
            <Intro />
          </div>
          <div className="flex flex-col justify-center items-center h-full md:w-[50%]">
            <div className="flex flex-col gap-1">
              <AboutMeSmall />
              {/* <Code />
              <ColorCodes /> */}
              <MyTimeline />
            </div>
          </div>
          <ScrollButton ref={ref} />
        </div>
        {/* Portrait mostly for ipads */}
        <div
          className="landscape:hidden portrait:flex summary-bg
                     flex-col justify-center items-center  md:gap-6 gap-y-8
                      md:px-14 px-5 mt-12 md:mt-0
                      z-100
                      w-full h-screen
                      bg-white dark:bg-black overflow-hidden"
        >
          <div className="flex flex-col gap-4 items-center justify-center lg:pt-0 w-full">
            <motion.div
              variants={slideIn("up", "spring", 0.5, 0.5)}
              initial={"hidden"}
              whileInView={"show"}
              className="w-fit flex flex-col justify-center items-center md:items-start gap-2"
            >
              <div className="text-xl lg:text-2xl text-gray-500 font-normal text-white">
                <span style={{"font-family":"Courier"}}>Hello World</span>  
                </div>
                <div className="text-xl lg:text-2xl text-gray-500 font-normal text-white">
                  <span>I'm</span>  
                </div>      
              <div className="md:text-7xl text-3xl uppercase font-bold bg-clip-text bg-gradient-to-r from-secondary to-tertiary text-transparent">
                Lucas Rea
              </div>
              <div className="md:text-2xl text-lg uppercase tracking-[0.15rem] dark:text-white">
                Software Development Engineer @ AMD
              </div>
              <div className="text-xl flex items-center justify-start w-full dark:text-white">
                <span className="flex items-center justify-center font-bold">
                  I <AiFillHeart className="ml-2 text-red-600" />
                </span>
                <Typed
                  className="font-bold md:pl-3 pl-2"
                  strings={["Software Development", "Artificial Intelligence","Soccer", "Coding", "Machine Learning", "Data", "Collaboration", "Video Games"]}
                  typeSpeed={80}
                  backSpeed={50}
                  loop
                />
              </div>
              <motion.div className="flex md:justify-start justify-center item-center w-full">
                <SocialMediaButtons />
              </motion.div>
            </motion.div>
          </div>
          <div className="flex items-start justify-center lg:items-end w-full">
            <div className="flex flex-col gap-5 mx-20">
            </div>
          </div>
          <ScrollButton ref={ref} />
        </div>
      </section>
    </>
  );
});

export default Summary;

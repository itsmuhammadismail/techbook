import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ProcessSvg from "../Home/ProcessSvg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Process = () => {
  const cloud1Ref = useRef();
  const cloud2Ref = useRef();

  useEffect(() => {
    gsap.to(cloud1Ref.current, {
      x: 22,
      yoyo: true,
      repeat: -1,
      duration: 2,
    });

    gsap.to(cloud2Ref.current, {
      x: -22,
      yoyo: true,
      repeat: -1,
      duration: 2,
    });
  }, []);

  return (
    <div className="relative max-w-[70rem] mx-auto">
      {/* <img
        src="/home/dots.svg"
        alt=""
        className="absolute left-[2rem] top-[20rem] "
      />
      <img
        src="/home/dots.svg"
        alt=""
        className="absolute right-[2rem] top-[20rem]"
      /> */}
      <div className=" left-0  flex flex-col justify-center items-center h-[55vh] sm:h-[65vh]">
        <div className="flex items-center gap-[2rem] sm:gap-[10rem]">
          <img
            src="/home/cloud1.svg"
            alt=""
            className="h-[70%] 2xl:h-[100%]"
            ref={cloud1Ref}
          />
          <Fade left>
            <h1 className="heading text-[4.5rem] font-bold leading-[5rem] ">
              Processes
            </h1>
          </Fade>
          <img
            src="/home/cloud2.svg"
            alt=""
            className="h-[70%] 2xl:h-[100%]"
            ref={cloud2Ref}
          />
        </div>
        <Zoom delay={500}>
          <p className="text-sm text-[#707070]  px-8 sm:px-0 text-center max-w-[45rem] mt-4 ">
            TCS Technology Team uses the processes below to refine communication
            and involvement with key stakeholders. Our Internal teams include
            Project Management, Software Quality Assurance, Development,
            Database, MIS, Production and Network Infrastructure and IT Support
            Teams.{" "}
          </p>
        </Zoom>
        {/* <img src="/home/process.svg" alt="" className="w-[50rem] ml-[-5rem]" /> */}
        <div className="w-[90vw] md:w-[50rem] sm:my-[-1rem]">
          <img src="/Processes.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Process;

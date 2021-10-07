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
      <img
        src="/home/dots.svg"
        alt=""
        className="absolute left-[2rem] top-[20rem] "
      />
      <img
        src="/home/dots.svg"
        alt=""
        className="absolute right-[2rem] top-[20rem]"
      />
      <div className=" left-0  flex flex-col justify-center items-center py-[5rem] min-h-[100vh]">
        <div className="flex gap-[10rem]">
          <img src="/home/cloud1.svg" alt="" className="" ref={cloud1Ref} />
          <Fade left>
            <h1 className="heading text-[4.5rem] font-bold leading-[5rem] ">
              Process
            </h1>
          </Fade>
          <img src="/home/cloud2.svg" alt="" className="" ref={cloud2Ref} />
        </div>
        <Zoom delay={500}>
          <p className="text-sm text-[#707070] text-center max-w-[45rem] mt-4">
            TCS Technology Team uses the processes below to refine communication
            and involvement with key stakeholders. Our Internal teams include
            Project Management, Software Quality Assurance, Development,
            Database, MIS, Production and Network Infrastructure and IT Support
            Teams.{" "}
          </p>
        </Zoom>
        {/* <img src="/home/process.svg" alt="" className="w-[50rem] ml-[-5rem]" /> */}
        <div className="w-[40rem] ml-[2rem]">
          <ProcessSvg />
        </div>
      </div>
    </div>
  );
};

export default Process;

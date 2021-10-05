import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import Fade from "react-reveal/Fade";
import ProcessSvg from "./ProcessSvg";
import Link from "next/link";

const Process = () => {
  const shape1Ref = useRef();
  const shape2Ref = useRef();

  useEffect(() => {
    gsap.to(shape1Ref.current, {
      scale: 1.2,
      yoyo: true,
      repeat: -1,
      duration: 3,
    });
    gsap.to(shape2Ref.current, {
      scale: 1.2,
      yoyo: true,
      repeat: -1,
      duration: 3,
    });
  }, []);
  return (
    <div className="relative z-[-10]">
      <img
        src="/home/processCircleTop.svg"
        alt=""
        className="absolute right-0"
        ref={shape1Ref}
      />
      <img
        src="/home/processCircleBottom.svg"
        alt=""
        className="absolute bottom-0"
        ref={shape2Ref}
      />
      <div className="lg:container mx-auto flex flex-col justify-center items-center py-[5rem] min-h-[100vh]">
        <Fade left>
          {" "}
          <h1 className="heading text-[4.5rem] font-bold leading-[5rem] ">
            Process
          </h1>
        </Fade>
        <Fade left delay={500}>
          {" "}
          <p className="text-sm text-[#707070] text-center w-[45rem] mt-4">
            Refined over many years, TCS Tech uses a process that delivers
            results. Working through five development phases, we collaborate
            continuously with our customer and stakeholders, regularly checking
            against the project goals and ensuring user’s needs are met.
          </p>
        </Fade>
        {/* <img src="/home/process.svg" alt="" className="w-[50rem] ml-[-5rem]" /> */}
        <Fade>
          <div className="w-[50rem] ml-[-5rem]">
            <ProcessSvg />
          </div>
        </Fade>
        <Link href="/processes">
          <a>
            <button className="bg-[#ED1818] text-white rounded-full h-[2.5rem] w-[12rem] p-5 flex justify-center items-center mt-[1rem]">
              View All
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Process;

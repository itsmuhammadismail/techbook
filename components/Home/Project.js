import { useEffect, useRef } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { gsap } from "gsap";
import TopCircleSvg from "./TopCircleSvg";
import BottomCircleSvg from "./BottomCircleSvg";
import Link from "next/link";

const Project = () => {
  return (
    <div className="bg-[#fafafa] mx-auto flex flex-col justify-center items-center py-[5rem] sm:min-h-[100vh]">
      <Fade left>
        <h1 className="heading ">Project Dashboard</h1>
      </Fade>
      <Fade left delay={500}>
        <p className="text-sm text-center text-[#707070] px-[2rem] sm:px-[0]  max-w-[45rem] mt-4">
          The TCS Tech Team works on a broad portfolio of projects including
          development of new and changes to existing systems. Some of our daily
          operations include the delivery on business requirements, including
          projects and NIRs as well as shaping key management initiatives. For a
          more detailed view take a look at our project dashboard:
        </p>
      </Fade>
      <div className="w-[70%] md:w-[50rem] mt-8 relative ">
        {/* Top Circle */}
        <Fade delay={4000}>
          <div className="absolute top-[-5rem] right-[-5rem] z-10 hidden sm:block">
            <TopCircleSvg />
          </div>
        </Fade>
        <Zoom delay={1000} duration={3000}>
          <img src="/home/dashboard.png" alt="" className="" />
        </Zoom>
        {/* Bottom Circle */}
        <Fade delay={4000}>
          <div className="absolute bottom-[-5rem] left-[-5rem] hidden sm:block">
            <BottomCircleSvg />
          </div>
        </Fade>
      </div>
      <Link href="/projects">
        <a>
          <button className="bg-[#ED1818] text-white rounded-full h-[2.5rem] w-[12rem] p-5 flex justify-center items-center mt-[3rem]">
            View All
          </button>
        </a>
      </Link>
    </div>
  );
};

export default Project;

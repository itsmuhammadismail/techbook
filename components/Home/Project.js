import { useEffect, useRef } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { gsap } from "gsap";
import TopCircleSvg from "./TopCircleSvg";
import BottomCircleSvg from "./BottomCircleSvg";

const Project = () => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center py-[5rem] min-h-[100vh]">
      <Fade left>
        <h1 className="heading ">Project Dashboard</h1>
      </Fade>
      <Fade left delay={500}>
        <p className="text-sm text-center text-[#707070]  w-[45rem] mt-4">
          The TCS Tech Team works on a broad portfolio of projects including
          development of new and changes to existing systems. Some of our daily
          operations include the delivery on business requirements, including
          projects and NIRs as well as shaping key management initiatives. For a
          more detailed view take a look at our project dashboard:
        </p>
      </Fade>
      <div className="w-[50rem] mt-8 relative">
        {/* Top Circle */}
        <Fade delay={4000}>
          <div className="absolute top-[-5rem] right-[-5rem] z-10">
            <TopCircleSvg />
          </div>
        </Fade>
        <Zoom delay={1000} duration={3000}>
          <img src="/home/projectDashboard.svg" alt="" className="" />
        </Zoom>
        {/* Bottom Circle */}
        <Fade delay={4000}>
          <div className="absolute bottom-[-5rem] left-[-5rem]">
            <BottomCircleSvg />
          </div>
        </Fade>
      </div>
      <button className="bg-[#ED1818] text-white rounded-full h-[2.5rem] w-[12rem] p-5 flex justify-center items-center mt-[3rem]">
        View All
      </button>
    </div>
  );
};

export default Project;

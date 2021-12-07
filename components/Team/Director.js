import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Link from "next/link";

const Director = () => {
  return (
    <div className="media mx-auto flex flex-col justify-center items-center min-h-[100vh] py-[4rem]">
      <Fade left>
        <h1 className="heading2 text-[3.5rem] font-bold leading-[5rem] ">
          Director Technology & Platform Services
        </h1>
      </Fade>
      <Zoom delay={500}>
        <p className="text-sm px-8 sm:px-0 text-[#707070]  max-w-[43rem] my-[1rem] text-center mb-8">
          Our Head of Departments report to the Director Technology and are
          responsible for managing key areas in the Software Development and IT
          Support Process. Technology Heads are responsible for the overall
          progress of Projects and NIRs in their respective key areas.
        </p>
      </Zoom>

      <div className="flex flex-wrap justify-center  items-center gap-8">
        <Zoom delay={3500}>
          <Link href="/asif-hanif">
            <a>
              <div className="flex flex-col items-center  w-[16rem]  h-[19rem] ">
                <div className="redImage  rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem]  flex justify-center items-center">
                  <img src="/Head.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Director</h2>
                <p className="text-center text-sm">
                  Director Technology & Platform Services
                </p>
              </div>
            </a>
          </Link>
        </Zoom>
      </div>
    </div>
  );
};

export default Director;

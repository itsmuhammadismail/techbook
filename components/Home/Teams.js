import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Link from "next/link";

const Teams = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="max-w-[65rem] 2xl:max-w-[70rem] mx-auto flex justify-between items-center min-h-[100vh] gap-8">
        <Fade left>
          <div className="">
            <h1 className="heading text-[4.5rem] font-bold leading-[5rem] ">
              Teams
            </h1>
            <p className="text-[#707070] text-sm w-[26rem] my-[1rem]">
              TCS Technology Team is based out of the TCS Head Office in Karachi
              and come from all across Pakistan. We’re friendly, knowledgeable,
              and open and we take pride in sharing our expertise, helping TCS
              Management and Stakeholders find the right solutions in the
              rapidly changing world of technology
            </p>
            <Link href="/team">
              <a>
                <button className="bg-[#ED1818] text-white rounded-full h-[2.5rem] w-[12rem] p-5 flex justify-center items-center mt-[2rem]">
                  View All
                </button>
              </a>
            </Link>
          </div>
        </Fade>
        <div className="relative flex justify-center items-center">
          <img src="/home/teamsBackground.svg" alt="" className="h-[100vh]" />
          <Zoom delay={500}>
            <img
              src="/home/team1.svg"
              alt=""
              className="absolute h-[22rem] 2xl:h-[25rem] ml-[-25rem]"
            />
          </Zoom>
          <Zoom delay={1000}>
            <img
              src="/home/team2.svg"
              alt=""
              className="absolute h-[22rem] 2xl:h-[25rem]"
            />
          </Zoom>
          <Zoom delay={1500}>
            <img
              src="/home/team3.svg"
              alt=""
              className="absolute h-[22rem] 2xl:h-[25rem] mr-[-25rem]"
            />
          </Zoom>
          <div className="relative z-[10]"></div>
        </div>
      </div>
    </div>
  );
};

export default Teams;

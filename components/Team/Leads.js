import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Link from "next/link";

const Leads = () => {
  return (
    <div className="max-w-[70rem] mx-auto flex flex-col justify-center items-center min-h-[100vh] py-[4rem]">
      <Fade left>
        <h1 className="heading2 font-bold leading-[5rem] ">Leads</h1>
      </Fade>
      <Zoom delay={800}>
        <p className="text-sm text-[#707070]  w-[43rem] my-[1rem] text-center mb-8">
          Our team leads manage individual teams in key areas. Each Team lead
          has engineers assigned to them and is responsible for completing
          projects assigned to them.
        </p>
      </Zoom>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <Zoom delay={1000}>
          <Link href="/rumman-hussain">
            <a>
              <div className="flex flex-col items-center w-[16rem]  h-[19rem]  ">
                <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Lead.svg" alt="" className="h-[100%]" />
                </div>
                <h2 className="text-xl mt-4 ">Rumman Hussain Siddiqui</h2>
                <p className="text-center text-sm">Senior Android Developer</p>
              </div>
            </a>
          </Link>
        </Zoom>
        <Zoom delay={1500}>
          <Link href="/arif-matloob">
            <a>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img
                    src="/Lead.svg"
                    alt=""
                    className="h-[100%] mb-[-0.5rem]"
                  />
                </div>
                <h2 className="text-xl mt-4 ">Muhammad Arif Matloob</h2>
                <p className="text-center text-sm">Senior Manager - Software</p>
              </div>
            </a>
          </Link>
        </Zoom>
        <Zoom delay={2000}>
          <Link href="/riaz-mehmood">
            <a>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img
                    src="/Lead.svg"
                    alt=""
                    className="h-[100%] mb-[-0.5rem]"
                  />
                </div>
                <h2 className="text-xl mt-4 ">Riaz Mehmood</h2>
                <p className="text-center text-sm">
                  System Analyst - UI Developer
                </p>
              </div>
            </a>
          </Link>
        </Zoom>
        <Zoom delay={2500}>
          <Link href="/rameez-jawaid">
            <a>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img
                    src="/Lead.svg"
                    alt=""
                    className="h-[100%] mb-[-0.5rem]"
                  />
                </div>
                <h2 className="text-xl mt-4 ">Rameez Jawaid</h2>
                <p className="text-center text-sm">Senior Frontend Engineer</p>
              </div>
            </a>
          </Link>
        </Zoom>
        <Zoom delay={3000}>
          <Link href="/fateh-ali">
            <a>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img
                    src="/Lead.svg"
                    alt=""
                    className="h-[100%] mb-[-0.5rem]"
                  />
                </div>
                <h2 className="text-xl mt-4 ">Syed Fateh Ali Shah</h2>
                <p className="text-center text-sm">Software Development Lead</p>
              </div>
            </a>
          </Link>
        </Zoom>
        <Zoom delay={3500}>
          <Link href="/shahbaz-ali">
            <a>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img
                    src="/Lead.svg"
                    alt=""
                    className="h-[100%] mb-[-0.5rem]"
                  />
                </div>
                <h2 className="text-xl mt-4 ">Shahbaz Ali</h2>
                <p className="text-center text-sm">
                  AM Middleware & Integrations
                </p>
              </div>
            </a>
          </Link>
        </Zoom>
      </div>
    </div>
  );
};

export default Leads;

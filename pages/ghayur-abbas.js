import Head from "next/head";
import Layout from "../components/Layout";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const HeadDev = () => {
  return (
    <div>
      <Head>
        <title>Techbook</title>
        <meta name="description" content="Techbook" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="media mx-auto flex flex-col justify-center items-center min-h-[100vh] py-[4rem] gap-12">
          <Zoom delay={1000}>
            <div className="flex flex-col items-center w-[18rem] sm:w-[25rem]  ">
              <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center ">
                <img src="/Head.svg" alt="" className="h-[100%] " />
              </div>
              <h2 className=" heading2 text-[2.5rem] font-bold leading-[5rem]">
                Syed Ghayur Abbas
              </h2>
              <p className="text-center text-sm">
                {" "}
                Head Technical - Network & Messaging{" "}
              </p>
            </div>
          </Zoom>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Zoom delay={1000}>
              <div className="flex flex-col items-center w-[16rem]  h-[19rem]  ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Mubashir Haroon</h2>
                <p className="text-center text-sm">
                  Service System Engineer - Microsoft
                </p>
              </div>
            </Zoom>
            <Zoom delay={1500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Kamran Jamil</h2>
                <p className="text-center text-sm">
                  Senior Hardware Technician
                </p>
              </div>
            </Zoom>
            <Zoom delay={2000}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Waqas Anees</h2>
                <p className="text-center text-sm">Sr. System Admin - LINUX</p>
              </div>
            </Zoom>
            <Zoom delay={2500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Muhammad Anwar</h2>
                <p className="text-center text-sm">
                  Assistant Manager System - Security
                </p>
              </div>
            </Zoom>
            <Zoom delay={3000}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Fahad Siddiqui</h2>
                <p className="text-center text-sm">
                  IT Infrastructure Engineer
                </p>
              </div>
            </Zoom>
            <Zoom delay={3500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Muhammad Jawed</h2>
                <p className="text-center text-sm">Manager Networks</p>
              </div>
            </Zoom>
            <Zoom delay={3500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Kamran Hassan</h2>
                <p className="text-center text-sm">
                  Senior Systems & Storage Administrator
                </p>
              </div>
            </Zoom>
            <Zoom delay={3500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Muhammad Haider</h2>
                <p className="text-center text-sm">Senior Engineer Network</p>
              </div>
            </Zoom>
            <Zoom delay={3500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Syed Amin Ul Haq</h2>
                <p className="text-center text-sm">
                  Sr. Systems Admin - Microsoft & LINUX
                </p>
              </div>
            </Zoom>
            <Zoom delay={3500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Mir Farrukh Shahzad</h2>
                <p className="text-center text-sm">Manager Technical</p>
              </div>
            </Zoom>
            <Zoom delay={3500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Tariq Masood</h2>
                <p className="text-center text-sm">
                  Technical Support Executive
                </p>
              </div>
            </Zoom>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HeadDev;

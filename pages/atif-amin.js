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
            <div className="flex flex-col items-center w-[18rem] sm:w-[25rem] ">
              <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center ">
                <img src="/Head.svg" alt="" className="h-[100%] " />
              </div>
              <h2 className=" heading2 text-[2.5rem] font-bold leading-[5rem]">
                Atif Amin
              </h2>
              <p className="text-center text-sm">
                {" "}
                Head Service Desk & Hardware Support
              </p>
            </div>
          </Zoom>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Zoom delay={1000}>
              <div className="flex flex-col items-center w-[16rem]  h-[19rem]  ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Ashraf Ali</h2>
                <p className="text-center text-sm">Hardware Manager</p>
              </div>
            </Zoom>
            <Zoom delay={1500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Akif Athar</h2>
                <p className="text-center text-sm">
                  Asset Management - Specialist
                </p>
              </div>
            </Zoom>
            <Zoom delay={2000}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Malik Muhammad Waseem</h2>
                <p className="text-center text-sm">
                  Asset Management - Specialist
                </p>
              </div>
            </Zoom>
            <Zoom delay={2500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Rehan Hussain Jawaid</h2>
                <p className="text-center text-sm">
                  Senior ServiceDesk Technician
                </p>
              </div>
            </Zoom>
            <Zoom delay={3000}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Noman Akhter</h2>
                <p className="text-center text-sm">
                  Senior ServiceDesk Technician
                </p>
              </div>
            </Zoom>
            <Zoom delay={3500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Syed Ali Mehdi Jafri</h2>
                <p className="text-center text-sm">
                  Senior ServiceDesk Technician
                </p>
              </div>
            </Zoom>
            <Zoom delay={3500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Tariq Anjum</h2>
                <p className="text-center text-sm">
                  Technical Support Executive
                </p>
              </div>
            </Zoom>
            <Zoom delay={3500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Syed M. Maisum Dawar</h2>
                <p className="text-center text-sm">
                  Senior Mobile Device Management Technician
                </p>
              </div>
            </Zoom>
            <Zoom delay={3500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Muhammad Adeel Khan</h2>
                <p className="text-center text-sm">Hardware Specialist</p>
              </div>
            </Zoom>
            <Zoom delay={3500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Rawal</h2>
                <p className="text-center text-sm">
                  Senior ServiceDesk Technician
                </p>
              </div>
            </Zoom>
            <Zoom delay={3500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Sheheryar Baloch</h2>
                <p className="text-center text-sm">Mobile Device Technician</p>
              </div>
            </Zoom>
            <Zoom delay={3500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Syed M Irfan</h2>
                <p className="text-center text-sm">
                  Senior ServiceDesk Technician
                </p>
              </div>
            </Zoom>
            <Zoom delay={3500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Iqbal Ahmed Khan</h2>
                <p className="text-center text-sm">
                  Senior ServiceDesk Technician
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

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
              <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center ">
                <img src="/Lead.svg" alt="" className="h-[100%]  mb-[-0.1rem]" />
              </div>
              <h2 className=" heading2 text-[2.5rem] font-bold leading-[5rem]">
                Syed Fateh Ali 
              </h2>
              <p className="text-center text-sm">
                Software Development Lead
              </p>
            </div>
          </Zoom>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Zoom delay={1000}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Muhammad Umar Khan</h2>
                <p className="text-center text-sm">Manager Middleware & Integrations</p>
              </div>
            </Zoom>
            <Zoom delay={1500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Syed Jawwad Shamim</h2>
                <p className="text-center text-sm">Senior Software Engineer</p>
              </div>
            </Zoom>
            <Zoom delay={2500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Muhammad Waqas</h2>
                <p className="text-center text-sm">Senior Software Engineer</p>
              </div>
            </Zoom>
            <Zoom delay={2500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Arsalan</h2>
                <p className="text-center text-sm">Software Engineer</p>
              </div>
            </Zoom>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HeadDev;

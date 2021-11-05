import Head from "next/head";
import Layout from "../components/Layout";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const HeadOracle = () => {
  return (
    <div>
      <Head>
        <title>Techbook</title>
        <meta name="description" content="Techbook" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="max-w-[70rem] mx-auto flex flex-col justify-center items-center min-h-[100vh] py-[4rem] gap-12">
          <Zoom delay={1000}>
            <div className="flex flex-col items-center w-[25rem]  ">
              <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center ">
                <img src="/Head.svg" alt="" className="h-[100%] " />
              </div>
              <h2 className=" heading2 text-[2.5rem] font-bold leading-[5rem]">
                Shakeel Rasheed
              </h2>
              <p className="text-center text-sm">
                {" "}
                Head Business System Oracle
              </p>
            </div>
          </Zoom>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Zoom delay={1000}>
              <div className="flex flex-col items-center w-[16rem]  h-[19rem]  ">
                <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Lead.svg" alt="" className="h-[100%]" />
                </div>
                <h2 className="text-xl mt-4 ">Javed A Khan</h2>
                <p className="text-center text-sm">Senior Manager ETL & BI</p>
              </div>
            </Zoom>
            <Zoom delay={1500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img
                    src="/Lead.svg"
                    alt=""
                    className="h-[100%] mb-[-0.5rem]"
                  />
                </div>
                <h2 className="text-xl mt-4 ">Muhammad Farrukh</h2>
                <p className="text-center text-sm">
                  Senior Database - Administrator
                </p>
              </div>
            </Zoom>
            <Zoom delay={2000}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img
                    src="/Lead.svg"
                    alt=""
                    className="h-[100%] mb-[-0.5rem]"
                  />
                </div>
                <h2 className="text-xl mt-4 ">Anwar Ali</h2>
                <p className="text-center text-sm">System Analyst</p>
              </div>
            </Zoom>
            <Zoom delay={2500}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img
                    src="/Lead.svg"
                    alt=""
                    className="h-[100%] mb-[-0.5rem]"
                  />
                </div>
                <h2 className="text-xl mt-4 ">Tausif Akbar Jilani</h2>
                <p className="text-center text-sm">
                  Heqd Financial Software System
                </p>
              </div>
            </Zoom>
            <Zoom delay={3000}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img
                    src="/Lead.svg"
                    alt=""
                    className="h-[100%] mb-[-0.5rem]"
                  />
                </div>
                <h2 className="text-xl mt-4 ">Talha Ishaq</h2>
                <p className="text-center text-sm">
                  Manager Development Software Engineering
                </p>
              </div>
            </Zoom>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HeadOracle;

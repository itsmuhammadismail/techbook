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
          <Zoom delay={200}>
            <div className="flex flex-col items-center w-[20rem]  ">
              <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center ">
                <img src="/Head.svg" alt="" className="h-[100%] " />
              </div>
              <h2 className=" heading2 text-[2.5rem] font-bold leading-[5rem]">
                Bilal Majeed
              </h2>
              <p className="text-center text-sm"> Head Of Product & PM</p>
            </div>
          </Zoom>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Zoom delay={400}>
              <div className="flex flex-col items-center w-[16rem]  h-[19rem]  ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Mirza Wajahat Baig</h2>
                <p className="text-center text-sm">PMO Lead</p>
              </div>
            </Zoom>
            <Zoom delay={600}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Syed M Irfan Hussain</h2>
                <p className="text-center text-sm">Project Manager</p>
              </div>
            </Zoom>
            <Zoom delay={600}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team GIrl.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Hiba Tariq</h2>
                <p className="text-center text-sm">Sr Product Manager</p>
              </div>
            </Zoom>
            <Zoom delay={600}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Asad Tanveer Lodhi</h2>
                <p className="text-center text-sm">Project Manager</p>
              </div>
            </Zoom>
            <Zoom delay={600}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Muhammad Farhan</h2>
                <p className="text-center text-sm">Project Manager</p>
              </div>
            </Zoom>
            <Zoom delay={600}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team GIrl.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Warda Tauqir</h2>
                <p className="text-center text-sm">Business Analyst</p>
              </div>
            </Zoom>
            <Zoom delay={600}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team GIrl.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Syeda Monisa Zehra</h2>
                <p className="text-center text-sm">Business Analyst</p>
              </div>
            </Zoom>
         
           
            <Zoom delay={600}>
              <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
                <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Team.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Mehad Elahi</h2>
                <p className="text-center text-sm">Junior Business Analyst</p>
              </div>
            </Zoom>
         
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HeadDev;

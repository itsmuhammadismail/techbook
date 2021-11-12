import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const HeadDev = () => {
  return (
    <div>
      <Head>
        <title>Sabir Hafeez</title>
        <meta name="description" content="Techbook" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="media mx-auto flex flex-col justify-center items-center min-h-[100vh] py-[4rem] gap-12">
          <Zoom delay={1000}>
            <div className="flex flex-col items-center w-[20rem]  ">
              <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center ">
                <img src="/Head.svg" alt="" className="h-[100%] " />
              </div>
              <h2 className=" heading2 text-[2.5rem] font-bold leading-[5rem]">
                Sabir Hafeez
              </h2>
              <p className="text-center text-sm">
                {" "}
                Head Software Enterprise Application Development
              </p>
            </div>
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
                    <p className="text-center text-sm">
                      Senior Android Developer
                    </p>
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
                    <p className="text-center text-sm">
                      Senior Manager - Software
                    </p>
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
                    <p className="text-center text-sm">
                      Senior Frontend Engineer
                    </p>
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
                    <p className="text-center text-sm">
                      Software Development Lead
                    </p>
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
      </Layout>
    </div>
  );
};

export default HeadDev;

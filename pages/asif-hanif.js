import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
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
            <div className="flex flex-col items-center w-[18rem] sm:w-[25rem] ">
              <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center ">
                <img src="/Head.svg" alt="" className="h-[100%] " />
              </div>
              <h2 className=" heading2 text-[2.5rem] font-bold leading-[5rem]">
                Asif Haneef
              </h2>
              <p className="text-center text-sm">Director Technology & Platform Services</p>
            </div>
          </Zoom>
          <div className="flex flex-wrap justify-center items-center gap-8">
          <Zoom delay={3500}>
          <Link href="/bilal-majeed">
            <a>
              <div className="flex flex-col items-center  w-[16rem]  h-[19rem] ">
                <div className="redImage  rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem]  flex justify-center items-center">
                  <img src="/Head.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Bilal Majeed</h2>
                <p className="text-center text-sm">Head of Product & PM</p>
              </div>
            </a>
          </Link>
        </Zoom>
        <Zoom delay={1000}>
          <Link href="/atif-amin">
            <a>
              <div className="flex flex-col  items-center w-[16rem] h-[19rem] ">
                <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Head.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Atif Amin</h2>
                <p className="text-center text-sm">
                  Head Service Desk & Hardware Support
                </p>
              </div>
            </a>
          </Link>
        </Zoom>
        <Zoom delay={1500}>
          <Link href="/ghayur-abbas">
            <a>
              <div className="flex flex-col items-center w-[16rem]  h-[19rem] ">
                <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Head.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Syed Ghayur Abbas Rizvi</h2>
                <p className="text-center text-sm">
                  Head Technical - Network & Messaging
                </p>
              </div>
            </a>
          </Link>
        </Zoom>
        <Zoom delay={2000}>
          <Link href="/sabir-hafeez">
            <a>
              <div className="flex flex-col  items-center w-[16rem]  h-[19rem] ">
                <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Head.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Sabir Hafeez</h2>
                <p className="text-center text-sm">
                  Head Software Enterprise Application Development
                </p>
              </div>
            </a>
          </Link>
        </Zoom>
        <Zoom delay={2500}>
          <Link href="/shakeel-rasheed">
            <a>
              <div className="flex flex-col items-center w-[16rem]  h-[19rem] ">
                <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Head.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Shakeel Rasheed</h2>
                <p className="text-center text-sm">
                  Head Business Systems - Oracle
                </p>
              </div>
            </a>
          </Link>
        </Zoom>
        <Zoom delay={3000}>
          <Link href="/asif-siddiqui">
            <a>
              <div className="flex flex-col items-center w-[16rem]  h-[19rem] ">
                <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Head.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Asif Iqbal Siddiqui</h2>
                <p className="text-center text-sm">
                  Head of Production Support
                </p>
              </div>
            </a>
          </Link>
        </Zoom>

        <Zoom delay={4000}>
          <Link href="/noman-sami">
            <a>
              <div className="flex flex-col items-center w-[16rem]  h-[19rem] ">
                <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
                  <img src="/Head.svg" alt="" className="h-[100%] " />
                </div>
                <h2 className="text-xl mt-4 ">Noman Sami</h2>
                <p className="text-center text-sm">QA Manager</p>
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

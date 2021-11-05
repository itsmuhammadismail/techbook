import Head from "next/head";
import Layout from "../../components/Layout";
import Process from "../../components/Processes/Process";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Techbook</title>
        <meta name="description" content="Techbook" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <Process />
        <div className="max-w-[70rem] mx-auto flex flex-col justify-center items-center mt-8">
          <Fade left>
            <h1 className="heading2 font-bold leading-[5rem] ">
              Process Flow
            </h1>
          </Fade>
          <Zoom delay={500}>
            <p className="text-sm text-[#707070]  text-center w-[45rem] mt-4">
              IT department flow charts, or workflows are a visual
              representation of the specific activities that occur in order to
              complete an IT process. There are many sub-processes and steps
              within the IT function that take place
              <br /> from the time IT employees are planning out their IT
              infrastructure until those plans reach their <br />
              end user (IT procurement, network administration, user support,
              etc.)
            </p>
          </Zoom>
          <div className="mt-[3rem] mb-[5rem]">
            <Zoom delay={500}>
              <img src="/flowchart2.svg" alt="" />
            </Zoom>
          </div>
        </div>
        <div className="bg-[#FAFAFA]">
          <div className="max-w-[70rem] mx-auto flex flex-col justify-center items-center py-[4rem]">
            <Fade left>
              <h1 className="heading text-[4.5rem] font-bold leading-[5rem] ">
                Main Process Diagram
              </h1>
            </Fade>
            <Zoom delay={500}>
              <p className="text-sm text-[#707070]  text-center w-[45rem] mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </Zoom>
            <div className="mx-auto mt-[4rem] flex flex-wrap gap-[3rem] justify-center">
              <Link href="/processes/it-process">
                <a>
                  <div className="flex flex-col items-center justify-center gap-2  transition-all duration-500 hover:scale-75">
                    <img src="/process/it.svg" alt="" className="h-[4.5rem]" />
                    <p className="font-semibold text-sm w-[9rem] text-center">
                      IT Process
                    </p>
                  </div>
                </a>
              </Link>
              <Link href="/processes/sqa-manual">
                <a>
                  <div className="flex flex-col items-center justify-center gap-2  transition-all duration-500 hover:scale-75">
                    <img src="/process/sqa.svg" alt="" className="h-[4.5rem]" />
                    <p className="font-semibold text-sm w-[9rem] text-center">
                      SQA (Manual Process)
                    </p>
                  </div>
                </a>
              </Link>
              <Link href="/processes/sqa-automation">
                <a>
                  <div className="flex flex-col items-center justify-center gap-2  transition-all duration-500 hover:scale-75">
                    <img src="/process/sqa.svg" alt="" className="h-[4.5rem]" />
                    <p className="font-semibold text-sm w-[9rem] text-center">
                      SQA (Automation Process)
                    </p>
                  </div>
                </a>
              </Link>
              <Link href="/processes/pmo-process">
                <a>
                  <div className="flex flex-col items-center justify-center gap-2  transition-all duration-500 hover:scale-75">
                    <img src="/process/pmo.svg" alt="" className="h-[4.5rem]" />
                    <p className="font-semibold text-sm w-[9rem] text-center">
                      PMO Process
                    </p>
                  </div>
                </a>
              </Link>
              <Link href="/processes/oracle-process">
                <a>
                  <div className="flex flex-col items-center justify-center gap-2  transition-all duration-500 hover:scale-75">
                    <img
                      src="/process/oracle.svg"
                      alt=""
                      className="h-[4.5rem]"
                    />
                    <p className="font-semibold text-sm w-[9rem] text-center">
                      Oracle Development Process
                    </p>
                  </div>
                </a>
              </Link>
              <Link href="/processes/dba-process">
                <a>
                  <div className="flex flex-col items-center justify-center gap-2 transition-all duration-500 hover:scale-75">
                    <img src="/process/dba.svg" alt="" className="h-[4.5rem]" />
                    <p className="font-semibold text-sm w-[9rem] text-center">
                      DBA Process
                    </p>
                  </div>
                </a>
              </Link>
              <Link href="/processes/production-process">
                <a>
                  <div className="flex flex-col items-center justify-center gap-2 transition-all duration-500 hover:scale-75">
                    <img
                      src="/process/production.svg"
                      alt=""
                      className="h-[4.5rem]"
                    />
                    <p className="font-semibold text-sm w-[9rem] text-center">
                      Production Support Process
                    </p>
                  </div>
                </a>
              </Link>
              <Link href="/processes/erp-process">
                <a>
                  <div className="flex flex-col items-center justify-center gap-2 transition-all duration-500 hover:scale-75">
                    <img src="/process/erp.svg" alt="" className="h-[4.5rem]" />
                    <p className="font-semibold text-sm w-[9rem] text-center">
                      ERP Process
                    </p>
                  </div>
                </a>
              </Link>
              <Link href="/processes/webapp-process">
                <a>
                  <div className="flex flex-col items-center justify-center gap-2 transition-all duration-500 hover:scale-75">
                    <img src="/process/web.svg" alt="" className="h-[4.5rem]" />
                    <p className="font-semibold text-sm w-[9rem] text-center">
                      Web/App Development Process
                    </p>
                  </div>
                </a>
              </Link>
              <Link href="/processes/mis-process">
                <a>
                  <div className="flex flex-col items-center justify-center gap-2 transition-all duration-500 hover:scale-75">
                    <img src="/process/mis.svg" alt="" className="h-[4.5rem]" />
                    <p className="font-semibold text-sm w-[9rem] text-center">
                      MIS/BI Process
                    </p>
                  </div>
                </a>
              </Link>
              <Link href="/processes/helpdesk-process">
                <a>
                  <div className="flex flex-col items-center justify-center gap-2 transition-all duration-500 hover:scale-75">
                    <img
                      src="/process/helpdesk.svg"
                      alt=""
                      className="h-[4.5rem]"
                    />
                    <p className="font-semibold text-sm w-[9rem] text-center">
                      Helpdesk / Servicedesk Process
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

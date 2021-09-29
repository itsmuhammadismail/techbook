import Head from "next/head";
import Layout from "../components/Layout";
import Process from "../components/Processes/Process";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

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
        <div className="lg:container mx-auto flex flex-col justify-center items-center">
          <Fade left>
            <h1 className="heading text-[4.5rem] font-bold leading-[5rem] ">
              Process Flow
            </h1>
          </Fade>
          <Zoom delay={500}>
            <p className="text-sm text-[#707070]  text-center w-[45rem] mt-4">
              IT department flow charts, or workflows are a visual
              representation of the specific activities that occur in order to
              complete an IT process. There are many sub-processes and steps
              within the IT function that take place<br/> from the time IT employees
              are planning out their IT infrastructure until those plans reach
              their <br/>end user (IT procurement, network administration, user
              support, etc.)
            </p>
          </Zoom>
          <div className="my-[3rem]">
            <Zoom delay={500}>
              <img src="/flowchart2.svg" alt="" />
            </Zoom>
          </div>
        </div>
      </Layout>
    </div>
  );
}

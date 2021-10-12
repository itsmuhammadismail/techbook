import Head from "next/head";
import Fade from "react-reveal/Fade";
import Layout from "../../components/Layout";

const MIS = () => {
  return (
    <div>
      <Head>
        <title>Techbook</title>
        <meta name="description" content="Techbook" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="border-b">
          <div className="max-w-[70rem] mx-auto flex flex-col justify-center items-center">
            <Fade left>
              <h1 className="heading text-[4.5rem] font-bold leading-[5rem] my-[4rem]">
                MIS/BI (Process)
              </h1>
            </Fade>
            <img src="/process2/MIS Flow.svg" alt="" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default MIS;

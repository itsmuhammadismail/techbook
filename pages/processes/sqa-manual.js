import Head from "next/head";
import Fade from "react-reveal/Fade";
import Layout from "../../components/Layout";

const SQA = () => {
  return (
    <div>
      <Head>
        <title>Techbook</title>
        <meta name="description" content="Techbook" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="">
          <div className="media mx-auto flex flex-col justify-center items-center">
            <Fade left>
              <h1 className="heading text-[4.5rem] font-bold leading-[5rem] my-[4rem] text-center">
                Software Quality Assurance<br/>(Manual Process)
              </h1>
            </Fade>
            <img src="/process2/sqa-manual.svg" alt="" className="mb-8" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SQA;

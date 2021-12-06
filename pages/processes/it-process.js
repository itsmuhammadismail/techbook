import Head from "next/head";
import Fade from "react-reveal/Fade";
import Layout from "../../components/Layout";

const IT = () => {
  return (
    <div>
      <Head>
        <title>Techbook</title>
        <meta name="description" content="Techbook" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="">
          <div className="media mx-auto flex flex-col px-[1.5rem] sm:px-[0] justify-center items-center">
            <Fade left>
              <h1 className="heading text-[4.5rem] text-center font-bold leading-[5rem] my-[4rem]">
                Information Technology
              </h1>
            </Fade>
            <img src="/process2/it.svg" alt="" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default IT;

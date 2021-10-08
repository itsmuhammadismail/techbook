import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Projects/Hero";

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Techbook</title>
        <meta name="description" content="Techbook" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <Hero />
        <div className="max-w-[65rem] 2xl:max-w-[75rem] mx-auto flex items-center">
          <div className="flex-1 bg-[#65cdd8] flex justify-center items-center h-[4rem]">TAB 1</div>
          <div className="flex-1 bg-[#f3f1f4] flex justify-center items-center h-[4rem] hover:bg-[#65cdd8]">TAB 2</div>
          <div className="flex-1 bg-[#f3f1f4] flex justify-center items-center h-[4rem] hover:bg-[#65cdd8]">TAB 3</div>
        </div>
        <div className="flex justify-center items-center border-b">
          <iframe
            className="w-[65rem] 2xl:w-[75rem] h-[185rem] 2xl:h-[208rem]"
            src="https://datastudio.google.com/embed/reporting/fb73a15a-afaa-476a-96b2-04dda3e3c484/page/1Ap9B"
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </Layout>
    </div>
  );
};

export default Projects;

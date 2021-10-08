import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Projects/Hero";

const Projects = () => {
  const [selected, setSelected] = useState("inprogress");
  const handleSelected = (name) => {
    setSelected(name);
  };
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
          <div
            className={`flex-1 flex justify-center items-center h-[4rem] hover:bg-[#65cdd8] ${
              selected === "inprogress" ? "bg-[#65cdd8]" : "bg-[#f3f1f4]"
            }`}
            onClick={() => handleSelected("inprogress")}
          >
            IN PROGRESS
          </div>
          <div
            className={`flex-1 flex justify-center items-center h-[4rem] hover:bg-[#65cdd8] ${
              selected === "completion" ? "bg-[#65cdd8]" : "bg-[#f3f1f4]"
            }`}
            onClick={() => handleSelected("completion")}
          >
            COMPLETION
          </div>
          <div
            className={`flex-1 flex justify-center items-center h-[4rem] hover:bg-[#65cdd8] ${
              selected === "tab 3" ? "bg-[#65cdd8]" : "bg-[#f3f1f4]"
            }`}
            onClick={() => handleSelected("tab 3")}
          >
            TAB 3
          </div>
          <div
            className={`flex-1 flex justify-center items-center h-[4rem] hover:bg-[#65cdd8] ${
              selected === "tab 4" ? "bg-[#65cdd8]" : "bg-[#f3f1f4]"
            }`}
            onClick={() => handleSelected("tab 4")}
          >
            TAB 4
          </div>
        </div>
        {selected === "inprogress" && (
          <div className="flex justify-center items-center border-b">
            <iframe
              className="w-[65rem] 2xl:w-[75rem] h-[185rem] 2xl:h-[208rem]"
              src="https://datastudio.google.com/embed/reporting/fb73a15a-afaa-476a-96b2-04dda3e3c484/page/1Ap9B"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        )}
        {selected === "completion" && (
          <div className="flex justify-center items-center border-b">
            <iframe
              className="w-[65rem] 2xl:w-[75rem] h-[185rem] 2xl:h-[208rem]"
              src="https://datastudio.google.com/embed/reporting/fb73a15a-afaa-476a-96b2-04dda3e3c484/page/1Ap9B"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        )}
        {selected === "tab 3" && (
          <div className="flex justify-center items-center border-b">
            <iframe
              className="w-[65rem] 2xl:w-[75rem] h-[185rem] 2xl:h-[208rem]"
              src="https://datastudio.google.com/embed/reporting/fb73a15a-afaa-476a-96b2-04dda3e3c484/page/1Ap9B"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        )}
        {selected === "tab 4" && (
          <div className="flex justify-center items-center border-b">
            <iframe
              className="w-[65rem] 2xl:w-[75rem] h-[185rem] 2xl:h-[208rem]"
              src="https://datastudio.google.com/embed/reporting/fb73a15a-afaa-476a-96b2-04dda3e3c484/page/1Ap9B"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        )}
      </Layout>
    </div>
  );
};

export default Projects;

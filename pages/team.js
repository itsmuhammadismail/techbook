import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Team/Hero";
import Heads from "../components/Team/Head";
import Leads from "../components/Team/Leads";
import Teams from "../components/Team/Teams";
import Director from "../components/Team/Director";

const Team = () => {
  return (
    <div>
      <Head>
      <title>Team</title>
        <meta name="description" content="Techbook" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="">
        <Hero />
        <Director />
        <Heads />
        <Leads />
        {/* <Teams /> */}
        </div>
      </Layout>
    </div>
  );
};

export default Team;

import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Team/Hero";
import Heads from "../components/Team/Head";
import Leads from "../components/Team/Leads";
import Teams from "../components/Team/Teams";

const Team = () => {
  return (
    <div>
      <Head>
      <title>Techbook</title>
        <meta name="description" content="Techbook" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <Hero />
        <Heads />
        <Leads />
        <Teams />
      </Layout>
    </div>
  );
};

export default Team;

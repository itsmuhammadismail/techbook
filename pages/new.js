import Hero from "../components/Home/Hero";
import KeyFigures from "../components/Home/KeyFigures";
import Process from "../components/Home/Process";
import Project from "../components/Home/Project";
import Resources from "../components/Home/Resources";
import Teams from "../components/Home/Teams";
import Upcoming from "../components/Home/Upcoming";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <KeyFigures />
        <Upcoming />
        <Project />
        <Teams />
        <Process />
        <Resources />
      </Layout>
    </div>
  );
};

export default Home;

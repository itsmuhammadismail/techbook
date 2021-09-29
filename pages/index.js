import Head from "next/head";
import Hero from "../components/Home/Hero";
import Layout from "../components/Layout";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import KeyFigures from "../components/Home/KeyFigures";
import Upcoming from "../components/Home/Upcoming";
import Resources from "../components/Home/Resources";
import Process from "../components/Home/Process";
import Teams from "../components/Home/Teams";
import Project from "../components/Home/Project";
import ProcessSvg from "../components/Home/ProcessSvg";

export default function Home() {
  const scrollRef = useRef();
  const scrollAnim = gsap.utils.selector(scrollRef);

  useEffect(() => {
    gsap.to(scrollRef.current, { y: 22, yoyo: true, repeat: -1, duration: 1 });
  }, []);

  return (
    <div>
      <Head>
        <title>Techbook</title>
        <meta name="description" content="Techbook" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        {/* Hero Section */}
        <Hero />
        {/* Scroll Start */}
        <a href="#keyFigures" className="flex justify-center items-center">
          <svg
            id="Scroll"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={37}
            height={56}
            viewBox="0 0 37 56"
          >
            <defs>
              <clipPath id="scroll_clippath">
                <rect
                  id="Rectangle_16"
                  data-name="Rectangle 16"
                  width={37}
                  height={56}
                  fill="none"
                />
              </clipPath>
            </defs>
            <g id="Group_18" data-name="Group 18" clipPath="url(#scroll_clippath)">
              <path
                id="Path_180"
                data-name="Path 180"
                d="M18.6,0A18.656,18.656,0,0,0,0,18.6V37.2a18.6,18.6,0,0,0,37.2,0V18.6A18.656,18.656,0,0,0,18.6,0"
                fill="#ed1818"
              />
              <path
                id="Path_181"
                data-name="Path 181"
                d="M29.9,34.553a13.951,13.951,0,0,1-27.9,0v-18.6a13.951,13.951,0,0,1,27.9,0Z"
                transform="translate(2.65 2.65)"
                fill="#ed1818"
              />
              <path
                id="Path_182"
                className="scrollNotch"
                ref={scrollRef}
                data-name="Path 182"
                d="M9.325,5.5A2.2,2.2,0,0,0,7,7.825V14.8a2.2,2.2,0,0,0,2.325,2.325A2.2,2.2,0,0,0,11.65,14.8V7.825A2.2,2.2,0,0,0,9.325,5.5"
                transform="translate(9.276 7.289)"
                fill="#fff"
              />
            </g>
          </svg>
        </a>
        {/* Scroll End */}
        {/* Key Figures */}
        <KeyFigures />
        {/* Upcoming */}
        <Upcoming />
        {/* Project Dashbaord */}
        <Project />
        {/* Teams */}
        <Teams />
        {/* Process */}
        <Process />
        {/* Resources */}
        <Resources />
      </Layout>
      
    </div>
  );
}

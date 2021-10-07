import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import Fade from "react-reveal/Fade";

const words = ["Your Window into the world of IT"];

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const Hero = () => {
  const cloud1Ref = useRef();
  const cloud2Ref = useRef();
  const redCircleRef = useRef();
  const red2CircleRef = useRef();

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  useEffect(() => {
    gsap.to(cloud1Ref.current, {
      x: 22,
      yoyo: true,
      repeat: -1,
      duration: 2,
    });
    gsap.from(cloud1Ref.current, {
      opacity: 0,
      yoyo: true,
      // delay: 1,
    });
    gsap.from(cloud2Ref.current, {
      opacity: 0,
      yoyo: true,
      delay: 2.2,
      duration: 1,
    });
    gsap.to(cloud2Ref.current, {
      x: -22,
      yoyo: true,
      repeat: -1,
      duration: 2,
    });
    gsap.to(redCircleRef.current, {
      y: 72,
      yoyo: true,
      repeat: -1,
      duration: 1,
      delay: 3,
    });
    gsap.to(red2CircleRef.current, {
      y: 32,
      yoyo: true,
      repeat: -1,
      duration: 0.5,
      delay: 3,
    });
  }, []);

  // typeWriter
  useEffect(() => {
    if (index === words.length - 1) setIndex(0);

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 50);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      if (words[0].length > subIndex) setBlink((prev) => !prev);
      else setBlink(false);
      console.log(subIndex);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div className="max-w-[70rem] mx-auto p-[1.5rem] h-[78vh]  flex items-center">
      <div className="flex items-center justify-between w-full relative">
        <img
          src="/home/dots.svg"
          alt=""
          className="absolute bottom-[7.5rem] h-[5rem] pl-[1.5rem] "
        />

        <img
          src="/home/cloud1.svg"
          alt=""
          className="absolute top-[8.5rem] left-[3rem]"
          ref={cloud1Ref}
        />

        <img
          src="/home/cloud2.svg"
          alt=""
          className="absolute top-[13.5rem] left-[43.5rem]"
          ref={cloud2Ref}
        />

        <div className="w-full flex justify-between items-center">
          <div className="ml-[9rem]">
            <h1 className="heading  w-[37rem] ">
              {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
            </h1>
            <Fade up delay={1000}>
              <p className="w-[30rem] text-[#707070] text-sm pt-2">
                Welcome to TCS Techbook. Your single point reference for
                everything related to the TCS Technology (IT). This website
                describes IT functions, teams and department structure and
                standard operating process followed by each team. We also
                present coming an easy view of completion deadlines and a<br/>
                detailed project dashboard for management and key stakeholders.
              </p>
            </Fade>
          </div>
          {/* Right Side Image */}
          <Fade right>
            <div
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xy: calc(x, y) })
              }
            >
              <animated.div
                style={{ transform: props.xy.interpolate(trans1) }}
                className="h-[30rem]"
              >
                <svg
                  id="Old"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="100%"
                  height="100%"
                  viewBox="0 0 595.524 425.103"
                >
                  <defs>
                    <clipPath id="hero_clippath">
                      <rect
                        id="Rectangle_9"
                        data-name="Rectangle 9"
                        width="595.524"
                        height="425.103"
                        fill="none"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_9"
                    data-name="Group 9"
                    clipPath="url(#hero_clippath)"
                  >
                    <path
                      id="redcirclehero1"
                      ref={redCircleRef}
                      data-name="Path 64"
                      d="M170.937,83.965a42.4,42.4,0,1,1-42.4-42.389,42.393,42.393,0,0,1,42.4,42.389"
                      transform="translate(61.85 29.851)"
                      fill="#ed1818"
                    />
                    <path
                      id="Path_65"
                      data-name="Path 65"
                      d="M156.721,389.537V140.772a91.489,91.489,0,0,1,182.978,0V389.537Z"
                      transform="translate(112.524 35.398)"
                      fill="#2d2d2d"
                    />
                    <path
                      id="Path_66"
                      data-name="Path 66"
                      d="M102.638,328.8H297.587c0-107.645-87.265-194.908-194.911-194.908h-.038Z"
                      transform="translate(73.693 96.133)"
                      fill="#64cdd8"
                    />
                    <path
                      id="Path_67"
                      data-name="Path 67"
                      d="M0,321.1H1.718c0-96.236,78.309-174.529,174.565-174.529S350.849,224.865,350.849,321.1h1.718c0-97.181-79.081-176.247-176.285-176.247S0,223.92,0,321.1"
                      transform="translate(0 104.002)"
                      fill="#2d2d2d"
                    />
                    <path
                      id="Path_68"
                      data-name="Path 68"
                      d="M17.765,308.349h1.718c0-79.41,64.619-144.016,144.046-144.016s144.045,64.606,144.045,144.016h1.718c0-80.357-65.39-145.734-145.763-145.734S17.765,227.993,17.765,308.349"
                      transform="translate(12.755 116.754)"
                      fill="#2d2d2d"
                    />
                    <path
                      id="Path_69"
                      data-name="Path 69"
                      d="M35.53,295.6h1.718a113.526,113.526,0,0,1,227.051,0h1.718a115.244,115.244,0,0,0-230.487,0"
                      transform="translate(25.51 129.507)"
                      fill="#2d2d2d"
                    />
                    <path
                      id="Path_70"
                      data-name="Path 70"
                      d="M53.3,282.845h1.718a83.005,83.005,0,0,1,166.011,0h1.718a84.723,84.723,0,0,0-169.447,0"
                      transform="translate(38.265 142.259)"
                      fill="#2d2d2d"
                    />
                    <path
                      id="Path_71"
                      data-name="Path 71"
                      d="M71.06,270.092h1.718a52.486,52.486,0,0,1,104.973,0h1.718a54.2,54.2,0,0,0-108.409,0"
                      transform="translate(51.02 155.011)"
                      fill="#2d2d2d"
                    />
                    <path
                      id="Path_72"
                      data-name="Path 72"
                      d="M88.825,257.34h1.718a21.965,21.965,0,0,1,43.931,0h1.718a23.683,23.683,0,0,0-47.367,0"
                      transform="translate(63.775 167.763)"
                      fill="#2d2d2d"
                    />
                    <path
                      id="Path_73"
                      data-name="Path 73"
                      d="M398.271,227.512h0V175.449A123.531,123.531,0,0,0,274.729,298.967H326.8a71.461,71.461,0,0,1,71.468-71.454"
                      transform="translate(197.252 125.968)"
                      fill="#ed1818"
                    />
                    <path
                      id="redcirclehero2"
                      ref={red2CircleRef}
                      data-name="Path 74"
                      d="M268.143,48.214A48.225,48.225,0,1,0,316.367,0a48.217,48.217,0,0,0-48.224,48.213"
                      transform="translate(192.524 0.001)"
                      fill="#ed1818"
                    />
                    <path
                      id="Path_75"
                      data-name="Path 75"
                      d="M230.1,341.256h1.718V208.875a90.63,90.63,0,0,1,181.26,0V341.256H414.8V208.875a92.348,92.348,0,0,0-184.7,0Z"
                      transform="translate(165.21 83.677)"
                      fill="#2d2d2d"
                    />
                    <path
                      id="Path_76"
                      data-name="Path 76"
                      d="M305.857,121.323h0a23.081,23.081,0,0,0,23.081-23.081V75.17H282.778V98.242a23.081,23.081,0,0,0,23.079,23.081"
                      transform="translate(203.031 53.97)"
                      fill="#2d2d2d"
                    />
                    <path
                      id="Path_77"
                      data-name="Path 77"
                      d="M289.924,147.542a5.1,5.1,0,1,0,5.106-5.1,5.106,5.106,0,0,0-5.106,5.1"
                      transform="translate(208.162 102.267)"
                      fill="#2d2d2d"
                    />
                    <path
                      id="Path_78"
                      data-name="Path 78"
                      d="M289.924,162.88a5.1,5.1,0,1,0,5.106-5.1,5.105,5.105,0,0,0-5.106,5.1"
                      transform="translate(208.162 113.28)"
                      fill="#2d2d2d"
                    />
                    <path
                      id="Path_79"
                      data-name="Path 79"
                      d="M289.924,179.056a5.1,5.1,0,1,0,5.106-5.1,5.107,5.107,0,0,0-5.106,5.1"
                      transform="translate(208.162 124.894)"
                      fill="#2d2d2d"
                    />
                    <path
                      id="Path_80"
                      data-name="Path 80"
                      d="M85.645,109.21A43.255,43.255,0,1,1,128.9,152.456,43.3,43.3,0,0,1,85.645,109.21m1.718,0A41.537,41.537,0,1,0,128.9,67.681,41.58,41.58,0,0,0,87.363,109.21"
                      transform="translate(61.492 47.36)"
                      fill="#2d2d2d"
                    />
                    <path
                      id="Path_81"
                      data-name="Path 81"
                      d="M197.863,102.569a22.516,22.516,0,1,0,22.516-22.511,22.516,22.516,0,0,0-22.516,22.511"
                      transform="translate(142.063 57.48)"
                      fill="#f4f4f4"
                    />
                  </g>
                </svg>
              </animated.div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Hero;

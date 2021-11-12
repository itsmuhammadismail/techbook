import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import Fade from "react-reveal/Fade";

const words = ["Our Amazing Family"];

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const Hero = () => {
  const cloud1Ref = useRef();
  const cloud2Ref = useRef();

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
      delay: 1.5,
      duration: 1,
    });
    gsap.to(cloud2Ref.current, {
      x: -22,
      yoyo: true,
      repeat: -1,
      duration: 2,
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
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div className="media mx-auto p-[1.5rem] h-[78vh] w-[100vw] flex items-center">
      <div className="flex items-center justify-between w-full relative">
        <img
          src="/home/dots.svg"
          alt=""
          className="absolute bottom-4 h-[5rem] pl-[1.5rem]"
        />

        <img
          src="/home/cloud1.svg"
          alt=""
          className="absolute top-[2.5rem] left-[3rem]"
          ref={cloud1Ref}
        />

        <img
          src="/home/cloud2.svg"
          alt=""
          className="absolute top-[6.5rem] left-[43.5rem]"
          ref={cloud2Ref}
        />

        <div className="w-full flex justify-between items-center">
          <div className="ml-[9rem]">
            <h1 className="heading fw-[27rem] 2xl:w-[37rem] leading-[5rem]">
              {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
            </h1>
            <Fade up delay={1000}>
              <p className="w-[24rem] 2xl:w-[30rem] text-[#9c8b8b] text-xs 2xl:text-sm pt-2">
                TCS Technology Team is based out of the TCS Head Office in
                Karachi. Supporting the Company’s widespread network of 900+
                outlets in 380 cities, 600+ satellite-tracked vehicles, and a
                proficient team of more than 4500+ couriers, we’re friendly,
                knowledgeable, open and we take pride in sharing our expertise.
                The TCS Technology Team is 100+ people strong and they include
                some of the Company’s best and brightest
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
                className="h-[17rem]"
              >
                <img src="/TeamPage.svg" alt="" />
              </animated.div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Hero;

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
    <div className="max-w-[75rem] mx-auto p-[1.5rem] h-[78vh] w-[100vw] flex items-center">
      <div className="flex items-center justify-between w-full relative">
        <img
          src="/home/dots.svg"
          alt=""
          className="absolute bottom-4 h-[5rem]"
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
            <h1 className="heading text-[4.5rem] font-bold w-[37rem] leading-[5rem]">
              {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
            </h1>
            <Fade up delay={1000}>
              <p className="w-[32rem] text-[#707070] text-sm pt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
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
                <img src="/Team.svg" alt="" />
              </animated.div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Hero;

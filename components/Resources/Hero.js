import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const Hero = () => {
  const cloud1Ref = useRef();
  const cloud2Ref = useRef();

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

    gsap.to(cloud2Ref.current, {
      x: -22,
      yoyo: true,
      repeat: -1,
      duration: 2,
    });
  }, []);

  return (
    <div className="relative max-w-[75rem] mx-auto">
      <div className=" left-0  flex flex-col items-center h-[50vh] sm:h-[65vh] justify-center">
        <div className="flex items-center gap-[2rem] sm:gap-[10rem]">
          <img src="/home/cloud1.svg" alt="" className="h-[70%] 2xl:h-[100%]" ref={cloud1Ref} />
          <Fade left>
            <h1 className="heading text-[4.5rem] font-bold leading-[5rem] ">
              Resources
            </h1>
          </Fade>
          <img src="/home/cloud2.svg" alt="" className="h-[70%] 2xl:h-[100%]" ref={cloud2Ref} />
        </div>
        <Zoom delay={500}>
          <p className="text-sm text-[#707070] text-center px-8 sm:px-0 w-full sm:w-[45rem] mt-4 h-[2rem]">
            Download documents and resources to start your next Project or NIR.
          </p>
        </Zoom>
        <Zoom delay={1000}>
          <div
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xy: calc(x, y) })
            }
          >
            <animated.div
              style={{ transform: props.xy.interpolate(trans1) }}
              // className="h-[20rem]"
            >
              <div className="w-[90vw] md:w-[40rem] md:ml-[2rem] mt-[2rem]">
                <img src="/1.svg" alt="" />
              </div>
            </animated.div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Hero;

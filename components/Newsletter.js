import { useSpring, animated } from "react-spring";
import MailboxSvg from "./MailboxSvg";
import Fade from "react-reveal/Fade";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const Newsletter = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div className="border-t">
      <div className="max-w-[75rem] mx-auto my-[5rem]  flex flex-col justify-center items-center">
        <div className="flex mx-auto items-end justify-center max-w-[70rem] ">
          <Fade left>
            <div className="">
              <div
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set({ xy: calc(x, y) })
                }
              >
                <animated.div
                  style={{ transform: props.xy.interpolate(trans1) }}
                >
                  <img
                    src="/newsletterCircle.svg"
                    alt=""
                    className="w-[9rem] mb-[1rem]"
                  />
                </animated.div>
              </div>

              <h1 className="heading text-[4.5rem] font-bold leading-[5rem] w-[30rem]">
                Subscribe to Newsletter
              </h1>
              <div className="flex mt-[2.5rem]">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="bg-[#E5E5E5] h-[2.5rem] p-5 rounded-l-full w-[18rem] focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#ED1818] text-white rounded-full h-[2.5rem] ml-[-1rem] w-[9rem] p-5 flex justify-center items-center"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="w-[25rem]">
              <MailboxSvg />
            </div>
          </Fade>
        </div>
        <Fade up>
          <div className="flex mx-auto items-end justify-end max-w-[48rem] mt-[4rem]">
            <img src="/newsletterBottom.svg" alt="" className="w-[16rem]" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Newsletter;

import { useSpring, animated } from "react-spring";
import MailboxSvg from "./MailboxSvg";
import Fade from "react-reveal/Fade";
import Modal from "./Modal";
import { useState, useRef } from "react";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const Newsletter = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const [show, setShow] = useState(false);

  const email = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(true);
    const res = await fetch(
      `http://qaapp-uat/TCSNEWEBAPI/api/WebsiteAPI/SubscribeNewsLetter?email=${email.current.value}`
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
    console.log(res);
  };

  return (
    <div className="bg-[#f1f1f1]">
      <div className="media mx-auto py-[5rem]  flex flex-col justify-center items-center bg-[#f1f1f1]">
        <div className="flex mx-auto items-end justify-center media ">
          <Fade left>
            <div className="">
              <div
                className="flex justify-center md:justify-start"
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
                    className="w-[6rem] sm:w-[9rem] mb-[1rem]"
                  />
                </animated.div>
              </div>

              <h1 className="heading font-bold sm:w-[30rem] text-center md:text-left px-8">
                Subscribe to Newsletter
              </h1>
              <form
                className="flex justify-center md:justify-start mt-[2.5rem]"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-[#E5E5E5] h-[2.5rem] p-5 rounded-l-full w-[10rem] sm:w-[18rem] focus:outline-none"
                  ref={email}
                  required
                />
                <button
                  type="submit"
                  className="bg-[#ED1818] text-white rounded-full h-[2.5rem] ml-[-1rem] w-[9rem] p-5 flex justify-center items-center"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </Fade>
          <Fade right>
            <div className="w-[25rem] hidden md:block">
              <MailboxSvg />
            </div>
          </Fade>
        </div>
        <Fade up>
          <div className="flex mx-auto items-end justify-end max-w-[48rem] mt-[2.5rem] sm:mt-[4rem]">
            <img src="/newsletterBottom.svg" alt="" className="w-[8rem] sm:w-[16rem]" />
          </div>
        </Fade>
      </div>
      <Modal show={show} onClose={() => setShow(false)} />
    </div>
  );
};

export default Newsletter;

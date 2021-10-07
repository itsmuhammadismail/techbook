import Fade from "react-reveal/Fade";
import { useSpring, animated } from "react-spring";
import ResourcesSvg from "./ResourcesSvg";
import Link from "next/link";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const Resources = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div className="bg-[#FAFAFA]">
      <div className="lg:container mx-auto flex flex-col justify-center items-center py-[5rem] min-h-[100vh]">
        <Fade left>
          <h1 className="heading text-[4.5rem] font-bold leading-[5rem] ">
            Resources
          </h1>
        </Fade>
        <Fade left delay={500}>
          <p className="text-sm text-[#707070]  text-center w-[45rem] mt-4">
            Download documents and resources to start your next Project or NIR.
            Read Responsibilities of and SOPs followed by different teams in the
            Technology Department. While our documents are primarily used for
            technology projects, they provide a good subset for non-software
            related projects as well.
          </p>
        </Fade>
        <div
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
            {/* <img src="/resources.svg" alt="" className="w-[40rem] mt-8" /> */}
            <div className="w-[40rem] mt-8">
              {/* <ResourcesSvg /> */}
              <img src="/resources.svg" alt="" />
            </div>
          </animated.div>
        </div>

        <Link href="/resources">
          <a>
            <button className="bg-[#ED1818] text-white rounded-full h-[2.5rem] w-[12rem] p-5 flex justify-center items-center mt-[3rem]">
              View All
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Resources;

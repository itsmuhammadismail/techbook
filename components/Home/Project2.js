import { useEffect, useRef } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { gsap } from "gsap";

const Project = () => {
  const redCircleRef = useRef();
  const red2CircleRef = useRef();

  // useEffect(() => {
  //   gsap.to(redCircleRef.current, {
  //     y: 42,
  //     yoyo: true,
  //     repeat: -1,
  //     duration: 1,
  //     delay: 3,
  //   });
  //   gsap.to(red2CircleRef.current, {
  //     y: -1,
  //     yoyo: true,
  //     repeat: -1,
  //     duration: 1,
  //     delay: 3,
  //   });
  // }, []);
  return (
    <div className="mx-auto flex flex-col justify-center items-center py-[5rem] min-h-[100vh]">
      <Fade left>
        <h1 className="heading ">Project Dashboard</h1>
      </Fade>
      <Fade left delay={500}>
        <p className="text-sm text-center w-[45rem] mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </p>
      </Fade>
      <div className="w-[50rem] mt-8 relative">
        {/* Top Circle */}
        <div className="absolute top-[-5rem] right-[-5rem] z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="134.988"
            height="149.862"
            viewBox="0 0 134.988 149.862"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_50"
                  data-name="Rectangle 50"
                  width="83.944"
                  height="124.581"
                  fill="none"
                />
              </clipPath>
            </defs>
            <g
              id="Group_56"
              data-name="Group 56"
              transform="translate(62.29 0) rotate(30)"
            >
              <g
                id="Group_55"
                data-name="Group 55"
                transform="translate(0 0)"
                clipPath="url(#clip-path)"
              >
                <path
                  id="Path_354"
                  ref={redCircleRef}
                  data-name="Path 354"
                  d="M.5,41.131A41.138,41.138,0,1,0,41.639,0,41.135,41.135,0,0,0,.5,41.131"
                  transform="translate(0.334 0.001)"
                  fill="#ed1818"
                />
                <path
                  id="Path_355"
                  data-name="Path 355"
                  d="M41.973,108.314A41.964,41.964,0,1,1,83.945,66.349a42.016,42.016,0,0,1-41.973,41.964m0-82.262a40.3,40.3,0,1,0,40.306,40.3,40.347,40.347,0,0,0-40.306-40.3"
                  transform="translate(0 16.266)"
                  fill="#2d2d2d"
                />
              </g>
            </g>
          </svg>
        </div>
        {/* Image */}
        <Zoom delay={1000} duration={3000}>
          <img src="/home/projectDashboard.svg" alt="" className="" />
        </Zoom>
        {/* Bottom Circle */}
        <div className="absolute bottom-[-5rem] left-[-5rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="147.449"
            height="147.449"
            viewBox="0 0 147.449 147.449"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_50"
                  data-name="Rectangle 50"
                  width="83.944"
                  height="124.581"
                  fill="none"
                />
              </clipPath>
            </defs>
            <g
              id="Group_57"
              data-name="Group 57"
              transform="translate(88.092) rotate(45)"
            >
              <g
                id="Group_55"
                data-name="Group 55"
                transform="translate(0 0)"
                clipPath="url(#clip-path)"
              >
                <path
                  id="Path_354"
                  ref={red2CircleRef}
                  data-name="Path 354"
                  d="M0,41.132A41.138,41.138,0,1,1,41.139,82.263,41.135,41.135,0,0,1,0,41.132"
                  transform="translate(0.834 42.317)"
                  fill="#ed1818"
                />
                <path
                  id="Path_355"
                  data-name="Path 355"
                  d="M41.973,0A41.964,41.964,0,1,0,83.945,41.964,42.016,42.016,0,0,0,41.973,0m0,82.262a40.3,40.3,0,1,1,40.306-40.3,40.347,40.347,0,0,1-40.306,40.3"
                  transform="translate(0 0.001)"
                  fill="#2d2d2d"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <button className="bg-[#ED1818] text-white rounded-full h-[2.5rem] w-[12rem] p-5 flex justify-center items-center mt-[3rem]">
        View All
      </button>
    </div>
  );
};

export default Project;

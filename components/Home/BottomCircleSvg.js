import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BottomCircleSvg = () => {
  const red2CircleRef = useRef();

  useEffect(() => {
    gsap.to(red2CircleRef.current, {
      y: -1,
      yoyo: true,
      repeat: -1,
      duration: 1,
      delay: 3,
    });
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="147.449"
      height="147.449"
      viewBox="0 0 147.449 147.449"
    >
      <defs>
        <clipPath id="bottomcirclesvg_clippath">
          <rect
            id="Bottomcirclesvg_RECT1"
            data-name="Rectangle 50"
            width="83.944"
            height="124.581"
            fill="none"
          />
        </clipPath>
      </defs>
      <g
        id="Bottomcirclesvg_G1"
        data-name="Group 57"
        transform="translate(88.092) rotate(45)"
      >
        <g
          id="Bottomcirclesvg_G2"
          data-name="Group 55"
          transform="translate(0 0)"
          clipPath="url(#bottomcirclesvg_clippath)"
        >
          <path
            id="Bottomcirclesvg_P1"
            ref={red2CircleRef}
            data-name="Path 354"
            d="M0,41.132A41.138,41.138,0,1,1,41.139,82.263,41.135,41.135,0,0,1,0,41.132"
            transform="translate(0.834 42.317)"
            fill="#ed1818"
          />
          <path
            id="Bottomcirclesvg_P2"
            data-name="Path 355"
            d="M41.973,0A41.964,41.964,0,1,0,83.945,41.964,42.016,42.016,0,0,0,41.973,0m0,82.262a40.3,40.3,0,1,1,40.306-40.3,40.347,40.347,0,0,1-40.306,40.3"
            transform="translate(0 0.001)"
            fill="#2d2d2d"
          />
        </g>
      </g>
    </svg>
  );
};

export default BottomCircleSvg;

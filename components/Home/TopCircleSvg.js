import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TopCircleSvg = () => {
  const redCircleRef = useRef();

  useEffect(() => {
    gsap.to(redCircleRef.current, {
      y: 42,
      yoyo: true,
      repeat: -1,
      duration: 1,
      delay: 3,
    });
  }, []);

  return (
    <svg width="134.988" height="149.862" viewBox="0 0 134.988 149.862">
      <defs>
        <clipPath id="topcirclesvg_clippath">
          <rect
            id="topcirclesvg_rect"
            data-name="Rectangle 50"
            width="83.944"
            height="124.581"
            fill="none"
          />
        </clipPath>
      </defs>
      <g
        id="Topcirclesvg_G1"
        data-name="Group 56"
        transform="translate(62.29 0) rotate(30)"
      >
        <g
          id="Topcirclesvg_G2"
          data-name="Group 55"
          transform="translate(0 0)"
          clipPath="url(#topcirclesvg_clippath)"
        >
          <path
            id="Topcirclesvg_P1"
            ref={redCircleRef}
            data-name="Path 354"
            d="M.5,41.131A41.138,41.138,0,1,0,41.639,0,41.135,41.135,0,0,0,.5,41.131"
            transform="translate(0.334 0.001)"
            fill="#ed1818"
          />
          <path
            id="Topcirclesvg_P2"
            data-name="Path 355"
            d="M41.973,108.314A41.964,41.964,0,1,1,83.945,66.349a42.016,42.016,0,0,1-41.973,41.964m0-82.262a40.3,40.3,0,1,0,40.306,40.3,40.347,40.347,0,0,0-40.306-40.3"
            transform="translate(0 16.266)"
            fill="#2d2d2d"
          />
        </g>
      </g>
    </svg>
  );
};

export default TopCircleSvg;

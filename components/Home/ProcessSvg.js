import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ProcessSvg = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imgRef = useRef();
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const arrowRef = useRef();

  useEffect(() => {
    gsap.from(imgRef.current, {
      opacity: 0,
      yoyo: true,
      // repeat: -1,
      duration: 1,
      delay: 0,
    });
    gsap.from(arrowRef.current, {
      opacity: 0,
      yoyo: true,
      // repeat: -1,
      duration: 1,
      delay: 0,
    });
    gsap.from(firstRef.current, {
      scale: 0.8,
      opacity: 0,
      yoyo: true,
      // repeat: -1,
      duration: 2,
      delay: 1,
    });
    gsap.from(secondRef.current, {
      scale: 0.8,
      opacity: 0,
      yoyo: true,
      // repeat: -1,
      duration: 2,
      delay: 2,
    });
    gsap.from(thirdRef.current, {
      scale: 0.8,
      opacity: 0,
      yoyo: true,
      // repeat: -1,
      duration: 2,
      delay: 3,
    });
    gsap.from(fourthRef.current, {
      scale: 0.8,
      opacity: 0,
      yoyo: true,
      // repeat: -1,
      duration: 2,
      delay: 4,
    });
  }, []);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1053.891 549.167"
      width="100%"
      heigh="100%"
      ref={imgRef}
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_202"
            data-name="Rectangle 202"
            width="1053.891"
            height="549.168"
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Group_323" data-name="Group 323" transform="translate(-34)">
        <g
          id="Group_322"
          data-name="Group 322"
          transform="translate(34)"
          clipPath="url(#clip-path)"
        >
          <g id="Group_739" ref={fourthRef} data-name="Group 739">
            <path
              id="Path_1050"
              data-name="Path 1050"
              d="M502.181,174.77,652.225,197.1l64.8,137.585,65.509-312.7Z"
              transform="translate(271.354 13.712)"
              fill="#ed1818"
            />
            <path
              id="Path_1060"
              data-name="Path 1060"
              d="M594.576,197.1l64.8,137.583,65.51-312.7Z"
              transform="translate(329.003 13.713)"
              fill="#b21212"
            />
          </g>
          <g id="Group_738" ref={thirdRef} data-name="Group 738">
            <path
              id="Path_1053"
              data-name="Path 1053"
              d="M486.232,259.425,472.809,410.914,687.076,173.922l-319.15-9.443Z"
              transform="translate(187.587 102.624)"
              fill="#64cdd8"
            />
            <path
              id="Path_1061"
              data-name="Path 1061"
              d="M646.778,170.294,445.934,255.8,432.511,407.286Z"
              transform="translate(227.885 106.252)"
              fill="#4b9aa2"
            />
          </g>
          <g id="Group_737" ref={secondRef} data-name="Group 737">
            <path
              id="Path_1056"
              data-name="Path 1056"
              d="M298.168,271.577,199.661,387.445l311.826-69.571L256.5,125.719Z"
              transform="translate(82.602 78.44)"
              fill="#2d2d2d"
            />
            <path
              id="Path_1062"
              data-name="Path 1062"
              d="M511.488,261.833l-213.32-46.3L199.662,331.4Z"
              transform="translate(82.602 134.48)"
              fill="#222"
            />
          </g>
          <g id="Group_736" ref={firstRef} data-name="Group 736">
            <path
              id="Path_1059"
              data-name="Path 1059"
              d="M169.184,162.055,25.69,212.433l304.355,97.18L206.755,15.087Z"
              transform="translate(-25.945 9.414)"
              fill="#cbcbcb"
            />
            <path
              id="Path_1063"
              data-name="Path 1063"
              d="M169.184,105.588l160.86,147.557L25.69,155.966Z"
              transform="translate(-25.945 65.88)"
              fill="#a1a4a9"
            />
          </g>
          <g id="Group_321" ref={arrowRef} data-name="Group 321">
            <g id="Group_320" data-name="Group 320" clipPath="url(#clip-path)">
              <path
                id="Path_1064"
                data-name="Path 1064"
                d="M258.6,71.365a3.233,3.233,0,1,0,1.786,4.211,3.238,3.238,0,0,0-1.786-4.211"
                transform="translate(116.602 44.381)"
                fill="#ed1818"
              />
              <path
                id="Path_1065"
                data-name="Path 1065"
                d="M293.948,83.047A3.232,3.232,0,0,0,292.3,89.3a3.136,3.136,0,0,0,.823.109,3.233,3.233,0,0,0,.82-6.361"
                transform="translate(138.901 51.749)"
                fill="#ed1818"
              />
              <path
                id="Path_1066"
                data-name="Path 1066"
                d="M282,79.649a3.232,3.232,0,1,0-1.9,6.181,3.119,3.119,0,0,0,.945.143,3.233,3.233,0,0,0,.95-6.324"
                transform="translate(131.366 49.607)"
                fill="#ed1818"
              />
              <path
                id="Path_1067"
                data-name="Path 1067"
                d="M270.207,75.759a3.233,3.233,0,0,0-2.158,6.1,3.278,3.278,0,0,0,1.08.187,3.234,3.234,0,0,0,1.078-6.283"
                transform="translate(123.927 47.153)"
                fill="#ed1818"
              />
              <path
                id="Path_1068"
                data-name="Path 1068"
                d="M247.2,66.459a3.234,3.234,0,1,0,1.591,4.289,3.229,3.229,0,0,0-1.591-4.289"
                transform="translate(109.408 41.282)"
                fill="#ed1818"
              />
              <path
                id="Path_1069"
                data-name="Path 1069"
                d="M204.553,41.436a3.23,3.23,0,1,0,.664,4.521,3.227,3.227,0,0,0-.664-4.521"
                transform="translate(82.433 25.452)"
                fill="#ed1818"
              />
              <path
                id="Path_1070"
                data-name="Path 1070"
                d="M214.687,48.494h0a3.207,3.207,0,0,0-4.479.952,3.232,3.232,0,1,0,4.482-.952"
                transform="translate(88.849 29.919)"
                fill="#ed1818"
              />
              <path
                id="Path_1071"
                data-name="Path 1071"
                d="M236.059,61.027a3.234,3.234,0,1,0,1.385,4.357,3.228,3.228,0,0,0-1.385-4.357"
                transform="translate(102.366 37.849)"
                fill="#ed1818"
              />
              <path
                id="Path_1072"
                data-name="Path 1072"
                d="M225.2,55.053a3.234,3.234,0,1,0,1.159,4.425,3.234,3.234,0,0,0-1.159-4.425"
                transform="translate(95.504 34.074)"
                fill="#ed1818"
              />
              <path
                id="Path_1073"
                data-name="Path 1073"
                d="M380.08,93.655a3.15,3.15,0,1,0,.021,6.3h.016a3.15,3.15,0,1,0-.037-6.3"
                transform="translate(193.167 58.435)"
                fill="#ed1818"
              />
              <path
                id="Path_1074"
                data-name="Path 1074"
                d="M367.644,93.525a3.232,3.232,0,0,0-.193,6.462.96.96,0,0,0,.1,0,3.233,3.233,0,0,0,.1-6.465"
                transform="translate(185.335 58.352)"
                fill="#ed1818"
              />
              <path
                id="Path_1075"
                data-name="Path 1075"
                d="M392.517,93.384a3.233,3.233,0,0,0,.133,6.463c.044,0,.091,0,.136,0a3.233,3.233,0,1,0-.27-6.46"
                transform="translate(200.997 58.264)"
                fill="#ed1818"
              />
              <path
                id="Path_1076"
                data-name="Path 1076"
                d="M404.93,92.5h0a3.46,3.46,0,0,0-2.969,3.582,3.264,3.264,0,0,0,3.22,3.012c.084,0,.174.021.258.015a3.286,3.286,0,0,0,2.967-3.539A3.416,3.416,0,0,0,404.93,92.5"
                transform="translate(208.815 57.715)"
                fill="#ed1818"
              />
              <path
                id="Path_1077"
                data-name="Path 1077"
                d="M355.223,92.925a3.232,3.232,0,1,0-.429,6.45c.071.007.146.01.218.01a3.234,3.234,0,0,0,.211-6.46"
                transform="translate(177.51 57.974)"
                fill="#ed1818"
              />
              <path
                id="Path_1078"
                data-name="Path 1078"
                d="M306.026,85.958a3.234,3.234,0,0,0-1.392,6.317,3.338,3.338,0,0,0,.7.075,3.234,3.234,0,0,0,.693-6.392"
                transform="translate(146.515 53.585)"
                fill="#ed1818"
              />
              <path
                id="Path_1079"
                data-name="Path 1079"
                d="M318.213,88.4a3.233,3.233,0,0,0-1.146,6.364,3.506,3.506,0,0,0,.578.05,3.233,3.233,0,0,0,.568-6.415"
                transform="translate(154.196 55.122)"
                fill="#ed1818"
              />
              <path
                id="Path_1080"
                data-name="Path 1080"
                d="M330.491,90.365a3.234,3.234,0,0,0-.906,6.4,3.368,3.368,0,0,0,.456.031,3.234,3.234,0,0,0,.45-6.436"
                transform="translate(161.93 56.362)"
                fill="#ed1818"
              />
              <path
                id="Path_1081"
                data-name="Path 1081"
                d="M342.83,91.874a3.233,3.233,0,1,0-.663,6.432,2.91,2.91,0,0,0,.336.016,3.233,3.233,0,0,0,.326-6.449"
                transform="translate(169.705 57.312)"
                fill="#ed1818"
              />
              <path
                id="Path_1082"
                data-name="Path 1082"
                d="M192.787,32.993a3.238,3.238,0,1,0,2.286.95,3.255,3.255,0,0,0-2.286-.95"
                transform="translate(76.295 20.585)"
                fill="#ed1818"
              />
              <path
                id="Path_1083"
                data-name="Path 1083"
                d="M674.712,19.335a2.379,2.379,0,0,0-2.493-.508l-40.3,15.258a2.382,2.382,0,1,0,1.687,4.454l30.871-11.687c-56.018,58.653-145.717,98.909-247.4,110.8a2.382,2.382,0,0,0,.273,4.748,2.683,2.683,0,0,0,.279-.015c102.4-11.973,192.87-52.5,249.686-111.6l-10.122,30.4a2.382,2.382,0,1,0,4.521,1.505L675.323,21.8a2.383,2.383,0,0,0-.611-2.47"
                transform="translate(216.938 11.65)"
                fill="#ed1818"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ProcessSvg;

import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

let delay = 0;

const KeyFigures = ({ data }) => {
  const shapeRef = useRef();

  const [viewPortEntered, setViewPortEntered] = useState(false);

  useEffect(() => {
    gsap.to(shapeRef.current, {
      y: 30,
      yoyo: true,
      repeat: -1,
      duration: 1,
    });
  }, []);

  return (
    <div className="relative bg-[#fafafa] mt-[5rem]" id="keyFigures">
      <img
        src="/home/keyFigures.svg"
        alt=""
        className="absolute top-[5rem] z-[-10] h-[30rem] 2xl:h-[40rem] z-[100]"
        ref={shapeRef}
      />
      <div className="media mx-auto px-[5rem] py-[5rem] flex flex-col justify-center items-center  min-h-[100vh] ">
        <Fade left>
          <h1 className="heading">Key Figures</h1>
        </Fade>
        <Zoom delay={500}>
          <p className="text-sm text-[#707070] text-center w-[45rem] mt-4">
            A quick snapshot of our achievements in the last two years.
          </p>
        </Zoom>
        <div className="flex flex-wrap gap-[1rem] 2xl:gap-[5rem] justify-center items-center mt-[2rem] media">
          {data &&
            data.map((d, index) => (
              <Zoom key={index} delay={delay}>
                <div className="flex flex-col justify-center items-center w-[10rem] text-center mt-[2rem]">
                  <div className="hidden">{(delay += 500)}</div>
                  <img
                    src={`https://drive.google.com/uc?export=view&id=${d[0]}`}
                    alt=""
                    className="h-[3.5rem] "
                  />

                  <h2 className="text-[#ED1818] text-3xl 2xl:text-4xl mt-4">
                    {/* <CountUp end={d[1]} duration={2.75} /> */}
                    {/* <CountUp end={d[1]} duration={2} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp> */}
                    {d[1]}
                  </h2>
                  <p className="text-xs">{d[2]}</p>
                </div>
              </Zoom>
            ))}
          {/* <Zoom delay={500}>
            <div className="flex flex-col justify-center items-center w-[10rem] text-center">
              <img
                src="/home/key/projects.svg"
                alt=""
                className="h-[3.5rem] "
              />
              <h2 className="text-[#ED1818] text-3xl 2xl:text-4xl mt-4">15</h2>
              <p className="text-xs">Number of Projects delivered</p>
            </div>
          </Zoom>
          <Zoom delay={1000}>
            <div className="flex flex-col justify-center items-center  w-[10rem] text-center">
              <img src="/home/key/nirServed.svg" alt="" className="h-[4rem]" />
              <h2 className="text-[#ED1818] text-3xl 2xl:text-4xl mt-4">18</h2>
              <p className="text-xs">Number of NIRs served</p>
            </div>
          </Zoom>
          <Zoom delay={1500}>
            <div className="flex flex-col justify-center items-center  w-[10rem] text-center">
              <img src="/home/key/nirDev.svg" alt="" className="h-[3.5rem] " />
              <h2 className="text-[#ED1818] text-3xl 2xl:text-4xl mt-4">22</h2>
              <p className="text-xs">NIRs in development</p>
            </div>
          </Zoom>
          <Zoom delay={2000}>
            <div className="flex flex-col justify-center items-center  w-[10rem] text-center">
              <img src="/home/key/nirUat.svg" alt="" className="h-[3.5rem] " />
              <h2 className="text-[#ED1818] text-3xl 2xl:text-4xl mt-4">35</h2>
              <p className="text-xs">NIRs in UAT</p>
            </div>
          </Zoom>
          <Zoom delay={2500}>
            <div className="flex flex-col justify-center items-center  w-[10rem] text-center">
              <img
                src="/home/key/projectsDev.svg"
                alt=""
                className="h-[3.5rem] "
              />
              <h2 className="text-[#ED1818] text-3xl 2xl:text-4xl mt-4">19</h2>
              <p className="text-xs">Projects in development</p>
            </div>
          </Zoom>
          <Zoom delay={3000}>
            <div className="flex flex-col justify-center items-center  w-[10rem] text-center">
              <img
                src="/home/key/projectsUat.svg"
                alt=""
                className="h-[3.5rem] "
              />
              <h2 className="text-[#ED1818] text-3xl 2xl:text-4xl mt-4">41</h2>
              <p className="text-xs">Projects in UAT</p>
            </div>
          </Zoom>
          <Zoom delay={3500}>
            <div className="flex flex-col justify-center items-center  w-[10rem] text-center">
              <img
                src="/home/key/supportDesk.svg"
                alt=""
                className="h-[3.5rem] "
              />
              <h2 className="text-[#ED1818] text-3xl 2xl:text-4xl mt-4">27</h2>
              <p className="text-xs">Support Desk issues resolved</p>
            </div>
          </Zoom>
          <Zoom delay={4000}>
            <div className="flex flex-col justify-center items-center  w-[10rem] text-center">
              <img
                src="/home/key/products.svg"
                alt=""
                className="h-[3.5rem] "
              />
              <h2 className="text-[#ED1818] text-3xl 2xl:text-4xl mt-4">52</h2>
              <p className="text-xs">Products in Portfolio</p>
            </div>
          </Zoom> */}
        </div>
      </div>
    </div>
  );
};

export default KeyFigures;

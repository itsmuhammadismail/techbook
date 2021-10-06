import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Link from "next/link";

const Upcoming = () => {
  const imgRef = useRef();
  const upRef = useRef();

  useEffect(() => {
    gsap.to(imgRef.current, {
      x: 22,
      yoyo: true,
      repeat: -1,
      duration: 2,
    });
    gsap.to(upRef.current, {
      rotate: 10,
      yoyo: true,
      repeat: -1,
      duration: 2,
    });
  }, []);
  return (
    <div className="bg-[#FAFAFA] relative ">
      <img
        src="/home/upcomingCircle.svg"
        alt=""
        className="absolute right-0 bottom-[3rem] h-[30rem]"
        ref={imgRef}
      />
      <div className="max-w-[65rem] 2xl:max-w-[75rem]  mx-auto flex flex-col justify-center  py-[5rem] min-h-[100vh]">
        <div className="flex items-center">
          <Zoom delay={1000}>
            <img
              src="/home/upcoming.svg"
              alt=""
              className="h-[7rem] mt-6 mr-6"
              ref={upRef}
            />
          </Zoom>
          <div className="">
            <Fade left>
              <h1 className="heading">Upcoming Deadlines</h1>
            </Fade>
            <Fade left delay={500}>
              <p className="text-sm text-[#707070] w-[40rem] mt-4 ml-2">
                View upcoming delivery and go live dates for the technology
                portfolio:
              </p>
            </Fade>
          </div>
        </div>
        <div className="flex gap-4 mt-[4rem]">
          {/* Card */}
          <Zoom delay={1500}>
            <div className="bg-white p-6 w-[20rem] 2xl:w-[24rem] h-[17rem]  flex flex-col rounded-lg card-shadow">
              <div className="flex items-center">
                <img src="/home/cls.svg" alt="" />
                <h2 className="ho font-bold text-[2.5rem]">CLS</h2>
              </div>
              <div className="my-2 text-xl">Courier & Logistics System</div>
              <p className="text-[#707070] text-sm">
                Cloud based real-time Logistics and Supply Chain System for
                Delivery Orchestration and Operational Visibility
              </p>
              <div className="flex mt-auto gap-4">
                <img src="/home/calender.svg" alt="" className="h-[2rem]" />
                <div className="text-xs text-[#707070] ">
                  <div className="">Start: 2019-10-01</div>
                  <div className="">Finish: 2021-05-03</div>
                </div>
              </div>
            </div>
          </Zoom>
          {/* Card */}
          <Zoom delay={2000}>
            <div className="bg-white p-6 w-[20rem] mt-[4rem] 2xl:w-[24rem] h-[17rem]  flex flex-col rounded-lg card-shadow">
              <div className="flex items-center">
                <img src="/home/crm.svg" alt="" />
                <h2 className="ho font-bold text-[2.5rem]">CRM</h2>
              </div>
              <div className="my-2 text-xl">Sales CRM System</div>
              <p className="text-[#707070] text-sm">
                Enterprise Customer Relationship Management System
              </p>
              <div className="flex mt-auto gap-4">
                <img src="/home/calender.svg" alt="" className="h-[2rem]" />
                <div className="text-xs text-[#707070] ">
                  <div className="">Start: 2019-10-01</div>
                  <div className="">Finish: 2021-05-03</div>
                </div>
              </div>
            </div>
          </Zoom>
          {/* Card */}
          <Zoom delay={2500}>
            <div className="bg-white p-6 mt-[8rem] w-[20rem] 2xl:w-[24rem] h-[17rem]  flex flex-col rounded-lg card-shadow">
              <div className="flex items-center">
                <img src="/home/gwms.svg" alt="" />
                <h2 className="ho font-bold text-[2.5rem]">GWMS</h2>
              </div>
              <div className="my-2 text-xl">Realtime Warehouse Management</div>
              <p className="text-[#707070] text-sm">
                GWMS is designed to onboard and serve customers in real time
              </p>
              <div className="flex mt-auto gap-4">
                <img src="/home/calender.svg" alt="" className="h-[2rem]" />
                <div className="text-xs text-[#707070] ">
                  <div className="">Start: 2019-10-01</div>
                  <div className="">Finish: 2021-05-03</div>
                </div>
              </div>
            </div>

            {/* <button className="mt-[26rem] ml-[0.5rem]">View All</button> */}
          </Zoom>
        </div>
        <Zoom delay={3000}>
          <Link href="/timeline">
            <a className="flex justify-center items-center mt-8">
              <button className="bg-[#ED1818] text-white rounded-full h-[2.5rem] w-[12rem] p-5 flex justify-center items-center mt-[1rem]">
                View All
              </button>
            </a>
          </Link>
        </Zoom>
      </div>
    </div>
  );
};

export default Upcoming;

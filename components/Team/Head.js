import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Head = () => {
  return (
    <div className="lg:container mx-auto flex flex-col justify-center items-center min-h-[100vh] py-[4rem]">
      <Fade left>
        <h1 className="heading text-[4.5rem] font-bold leading-[5rem] ">
          Heads
        </h1>
      </Fade>
      <Zoom delay={500}>
        <p className="text-sm text-[#707070]  w-[43rem] my-[1rem] text-center mb-8">
          Our Head of Departments report to the Director Technology and are
          responsible for managing key areas in the Software Development and IT
          Support Process. Technology Heads are responsible for the overall
          progress of Projects and NIRs in their respective key areas.
        </p>
      </Zoom>

      <div className="flex flex-wrap justify-center items-center gap-8">
        <Zoom delay={1000}>
          <div className="flex flex-col  items-center w-[18rem] h-[19rem] ">
            <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem]"></div>
            <h2 className="text-xl mt-4 ">Sabir Hafeez</h2>
            <p className="text-center text-sm">
              Head Software Enterprise Application Development
            </p>
          </div>
        </Zoom>
        <Zoom delay={1500}>
          <div className="flex flex-col items-center w-[18rem]  h-[19rem] ">
            <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem]"></div>
            <h2 className="text-xl mt-4 ">Atif Amin</h2>
            <p className="text-center text-sm">
              Head Service Desk & Hardware Support
            </p>
          </div>
        </Zoom>
        <Zoom delay={2000}>
          <div className="flex flex-col  items-center w-[18rem]  h-[19rem] ">
            <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem]"></div>
            <h2 className="text-xl mt-4 ">Syed Ghayur Abbas Rizvi</h2>
            <p className="text-center text-sm">
              Head Technical - Network & Messaging
            </p>
          </div>
        </Zoom>
        <Zoom delay={2500}>
          <div className="flex flex-col items-center w-[18rem]  h-[19rem] ">
            <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem]"></div>
            <h2 className="text-xl mt-4 ">Shakeel Rasheed</h2>
            <p className="text-center text-sm">
              Head Business Systems - Oracle
            </p>
          </div>
        </Zoom>
        <Zoom delay={3000}>
          <div className="flex flex-col items-center w-[18rem]  h-[19rem] ">
            <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem]"></div>
            <h2 className="text-xl mt-4 ">Sadan-ul-Haq Syed</h2>
            <p className="text-center text-sm">DBA Head</p>
          </div>
        </Zoom>
        <Zoom delay={3500}>
          <div className="flex flex-col items-center w-[18rem]  h-[19rem] ">
            <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem]"></div>
            <h2 className="text-xl mt-4 ">Asif Iqbal Siddiqui</h2>
            <p className="text-center text-sm">Head of Production Support</p>
          </div>
        </Zoom>
        <Zoom delay={4000}>
          <div className="flex flex-col items-center w-[18rem]  h-[19rem] ">
            <div className="redImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem]"></div>
            <h2 className="text-xl mt-4 ">Atif Tanveer Lodhi</h2>
            <p className="text-center text-sm">Head of EPMO & IT Governance</p>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Head;

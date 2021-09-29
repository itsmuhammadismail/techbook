import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Leads = () => {
  return (
    <div className="lg:container mx-auto flex flex-col justify-center items-center min-h-[100vh] py-[4rem]">
      <Fade left>
        <h1 className="heading text-[4.5rem] font-bold leading-[5rem] ">
          Leads
        </h1>
      </Fade>
      <Zoom delay={800}>
        <p className="text-sm text-[#707070]  w-[43rem] my-[1rem] text-center mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
      </Zoom>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <Zoom delay={1000}>
          <div className="flex flex-col items-center w-[18rem]  h-[19rem]  ">
            <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem]"></div>
            <h2 className="text-xl mt-4 ">Muhammad Arif Matloob</h2>
            <p className="text-center text-sm">Senior Manager - Software</p>
          </div>
        </Zoom>
        <Zoom delay={1500}>
          <div className="flex flex-col items-center w-[18rem] h-[19rem]   ">
            <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem]"></div>
            <h2 className="text-xl mt-4 ">Riaz Mehmood</h2>
            <p className="text-center text-sm">System Analyst - UI Developer</p>
          </div>
        </Zoom>
        <Zoom delay={2000}>
          <div className="flex flex-col items-center w-[18rem] h-[19rem]   ">
            <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem]"></div>
            <h2 className="text-xl mt-4 ">Syed Fatah Ali Shah</h2>
            <p className="text-center text-sm">Software Development Lead</p>
          </div>
        </Zoom>
        <Zoom delay={2500}>
          <div className="flex flex-col items-center w-[18rem] h-[19rem]   ">
            <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem]"></div>
            <h2 className="text-xl mt-4 ">Rameez Jawaid</h2>
            <p className="text-center text-sm">Senior Frontend Engineer</p>
          </div>
        </Zoom>
        <Zoom delay={3000}>
          <div className="flex flex-col items-center w-[18rem] h-[19rem]   ">
            <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem]"></div>
            <h2 className="text-xl mt-4 ">Rumman Hussain Siddiqui</h2>
            <p className="text-center text-sm">Senior Android Developer</p>
          </div>
        </Zoom>
        <Zoom delay={3500}>
          <div className="flex flex-col items-center w-[18rem] h-[19rem]   ">
            <div className="blueImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem]"></div>
            <h2 className="text-xl mt-4 ">Shahbaz Ali</h2>
            <p className="text-center text-sm">AM Middleware & Integrations</p>
          </div>
        </Zoom>
       
      </div>
    </div>
  );
};

export default Leads;

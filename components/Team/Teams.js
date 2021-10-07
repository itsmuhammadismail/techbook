import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Teams = () => {
  return (
    <div className="max-w-[70rem] mx-auto flex flex-col justify-center items-center min-h-[100vh] py-[4rem]">
      <Fade left>
        <h1 className="heading text-[4.5rem] font-bold leading-[5rem] ">
          Teams
        </h1>
      </Fade>
      <Zoom delay={500}>
        <p className="text-sm text-[#707070]  w-[43rem] my-[1rem] text-center mb-8">
          Our engineers, managers and executives are laying the foundation for
          the next decade of technology to enable TCS Services. They include
          brilliant young minds and represent the best of TCS.
        </p>
      </Zoom>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <Zoom delay={1000}>
          <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
            <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
              <img src="/team.png" alt="" className="h-[100%] " />
            </div>
            <h2 className="text-xl mt-4 ">Touqeer Ahmed Khan</h2>
            <p className="text-center text-sm">Senior UI/UX Designer</p>
          </div>
        </Zoom>
        <Zoom delay={1500}>
          <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
            <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
              <img src="/team.png" alt="" className="h-[100%] " />
            </div>
            <h2 className="text-xl mt-4 ">Muhammad Ismail</h2>
            <p className="text-center text-sm">Frontend Developer</p>
          </div>
        </Zoom>
        <Zoom delay={2000}>
          <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
            <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
              <img src="/team.png" alt="" className="h-[100%] " />
            </div>
            <h2 className="text-xl mt-4 ">Arsalan</h2>
            <p className="text-center text-sm">Sofware Engineer</p>
          </div>
        </Zoom>
        <Zoom delay={2500}>
          <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
            <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
              <img src="/team.png" alt="" className="h-[100%] " />
            </div>
            <h2 className="text-xl mt-4 ">Muhammad Osama</h2>
            <p className="text-center text-sm">Software Engineer</p>
          </div>
        </Zoom>
        <Zoom delay={3000}>
          <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
            <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
              <img src="/team.png" alt="" className="h-[100%] " />
            </div>
            <h2 className="text-xl mt-4 ">Syed Ali Mehdi Jafri</h2>
            <p className="text-center text-sm">Senior ServiceDesk Technician</p>
          </div>
        </Zoom>
        <Zoom delay={3500}>
          <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
            <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
              <img src="/team.png" alt="" className="h-[100%] " />
            </div>
            <h2 className="text-xl mt-4 ">Syed Muhammad Irfan</h2>
            <p className="text-center text-sm">Senior ServiceDesk Technician</p>
          </div>
        </Zoom>
        <Zoom delay={4000}>
          <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
            <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
              <img src="/team.png" alt="" className="h-[100%] " />
            </div>
            <h2 className="text-xl mt-4 ">Muhammad Faisal Abbasi</h2>
            <p className="text-center text-sm">Network Engineer</p>
          </div>
        </Zoom>
        <Zoom delay={4500}>
          <div className="flex flex-col items-center w-[16rem] h-[19rem]   ">
            <div className="grayImage rounded-lg w-full h-[13rem] hover:w-[110%] hover:h-[14rem] pt-[2rem] flex justify-center items-center">
              <img src="/team.png" alt="" className="h-[100%] " />
            </div>
            <h2 className="text-xl mt-4 ">Fahad Siddiqui</h2>
            <p className="text-center text-sm">IT Infrastructure Engineer</p>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Teams;

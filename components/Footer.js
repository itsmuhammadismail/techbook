import Link from "next/link";
import Nav from "./Nav";

const Footer = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <footer className="max-w-[70rem] mx-auto flex justify-between items-center p-[1.5rem] ">
        <div className="">
          <Link href="/#top">
            <a>
              <img src="/home/logo.svg" alt="" className="h-[1.5rem] sm:h-[2rem]" />
            </a>
          </Link>
        </div>
        <div className="hidden md:block">
          <Nav />
        </div>
      </footer>
    </div>
  );
};

export default Footer;

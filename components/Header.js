import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header
      id="top"
      className="media mx-auto flex justify-between items-center p-[1.5rem]"
    >
      <div className="">
        <Link href="/">
          <a>
            <img src="/home/logo.svg" alt="" className="h-[1.5rem] sm:h-[2rem]" />
          </a>
        </Link>
      </div>
      <div className="hidden md:block ">
        <Nav />
      </div>
      <img className="block md:hidden" src="/menu.svg" />
    </header>
  );
};

export default Header;

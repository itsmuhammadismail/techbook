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
            <img src="/home/logo.svg" alt="" className="h-[2rem]" />
          </a>
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;

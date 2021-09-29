import Link from "next/link";
import Nav from "./Nav";

const Footer = () => {
  return (
    <div className="border-t">
      <footer className="max-w-[75rem] mx-auto flex justify-between items-center p-[1.5rem] ">
        <div className="">
          <Link href="/#top">
            <a>
              <img src="/logo.png" alt="" className="h-[2rem]" />
            </a>
          </Link>
        </div>
        <Nav />
      </footer>
    </div>
  );
};

export default Footer;

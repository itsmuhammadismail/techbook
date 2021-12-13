import Link from "next/link";
import Nav from "./Nav";
import MenuDrawer from "./MenuDrawer";
import { useState } from "react";

const Header = () => {
  // Menu Drawer
  const [menu, setMenu] = useState(false);
  const showMenuDrawer = () => {
    setMenu(true);
  };
  return (
    <div className="sticky top-0 w-[100%] z-[1000000] bg-white">
      <header
        id="top"
        className="media mx-auto flex justify-between items-center p-[1.5rem] "
      >
        <div className="">
          <Link href="/">
            <a>
              <img
                src="/home/logo.svg"
                alt=""
                className="h-[1.5rem] sm:h-[1.8rem] 2xl:h-[2rem]"
              />
            </a>
          </Link>
        </div>
        <div className="hidden md:block ">
          <Nav />
        </div>
        <img
          className="block md:hidden"
          src="/menu.svg"
          onClick={showMenuDrawer}
        />

        {/* Drawers */}
        <MenuDrawer visible={menu} setVisible={setMenu} />
      </header>
    </div>
  );
};

export default Header;

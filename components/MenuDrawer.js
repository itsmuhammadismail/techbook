import { Drawer } from "antd";
import { DashboardOutlined, FormOutlined } from "@ant-design/icons";
import Link from "next/link";

const MenuDrawer = ({ visible, setVisible }) => {
  const onClose = () => {
    setVisible(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer
        width={280}
        placement={"left"}
        closable={false}
        onClose={onClose}
        visible={visible}
        style={{ padding: 0 }}
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
          <div className="mt-[2rem]">
            <div className="px-[1rem] py-[0.5rem]">
              <Link href="/projects">
                <a>
                  <div className="flex items-center gap-6">
                    <span>Projects</span>
                  </div>
                </a>
              </Link>
            </div>
            <div className="px-[1rem] py-[0.5rem]">
              <Link href="/timeline">
                <a>
                  <div className="flex items-center gap-6">
                    <span>Timelines</span>
                  </div>
                </a>
              </Link>
            </div>
            <div className="px-[1rem] py-[0.5rem]">
              <Link href="/team">
                <a>
                  <div className="flex items-center gap-6">
                    <span>Team</span>
                  </div>
                </a>
              </Link>
            </div>
            <div className="px-[1rem] py-[0.5rem]">
              <Link href="/processes">
                <a>
                  <div className="flex items-center gap-6">
                    <span>Processes</span>
                  </div>
                </a>
              </Link>
            </div>
            <div className="px-[1rem] py-[0.5rem]">
              <Link href="/resources">
                <a>
                  <div className="flex items-center gap-6">
                    <span>Resources</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MenuDrawer;

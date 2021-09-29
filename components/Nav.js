import Link from "next/link";

const Nav = () => {
  return (
    <ul className="flex gap-[2.5rem] text-sm">
      <Link href="/projects">
        <a className="hover:text-[#ED1818]">
          <li>Projects</li>
        </a>
      </Link>
      <Link href="/timeline">
        <a className="hover:text-[#ED1818]">
          <li>Timelines</li>
        </a>
      </Link>
      <Link href="/team">
        <a className="hover:text-[#ED1818]">
          <li>Team</li>
        </a>
      </Link>
      <Link href="/processes">
        <a className="hover:text-[#ED1818]">
          <li>Processes</li>
        </a>
      </Link>
      <Link href="/resources">
        <a className="hover:text-[#ED1818]">
          <li>Resources</li>
        </a>
      </Link>
    </ul>
  );
};

export default Nav;

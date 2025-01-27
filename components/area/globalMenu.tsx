import Image from "next/image";
import Link from "next/link";
import "./globalMenu.css";

export default function GlobalMenu() {
  return (
    <nav className="menu">
      <div className="brandArea">
        <Image
          src="/logo.png"
          alt="Portfy Logo"
          width={50}
          height={50}
          className="brandImage"
        />
        <h1 className="name">Portfy</h1>
      </div>
      <div className="menuArea">
        <ul className="menuList">
          <li>
            <Link href="/" className="active menuItem">
              <Image
                className="menuIcon"
                src="/icons/home.svg"
                alt="Home"
                width={30}
                height={30}
              />
              <span className="menuText">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/nodes" className="menuItem">
              <Image
                className="menuIcon"
                src="/icons/node.svg"
                alt="Nodes"
                width={30}
                height={30}
              />
              <span className="menuText">Nodes</span>
            </Link>
          </li>
          <li>
            <Link href="/projects" className="menuItem">
              <Image
                className="menuIcon"
                src="/icons/project.svg"
                alt="Projects"
                width={30}
                height={30}
              />
              <span className="menuText">Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/notices" className="menuItem">
              <Image
                className="menuIcon"
                src="/icons/notices.svg"
                alt="Notices"
                width={30}
                height={30}
              />
              <span className="menuText">Notices</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="userArea">
        <Image src="/icons/user.svg" alt="User" width={30} height={30} />
        <span>John Doe</span>
      </div>
    </nav>
  );
}

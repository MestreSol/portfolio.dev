import Image from 'next/image'
import Link from 'next/link'
import style from './style.module.css'

export default function GlobalMenu() {
  return (
    <nav className={style.menu}>
      <div className={style.brandArea}>
        <Image
          src="/logo.png"
          alt="Portfy Logo"
          width={50}
          height={50}
          className={style.brandImage}
        />
        <h1 className={style.name}>Portfy</h1>
      </div>
      <div className={style.menuArea}>
        <ul className={style.menuList}>
          <li>
            <Link href="/" className={style.menuItem + ' ' + style.active}>
              <Image
                className={style.menuIcon}
                src="/icons/home.svg"
                alt="Home"
                width={30}
                height={30}
              />
              <span className={style.menuText}>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/nodes" className={style.menuItem}>
              <Image
                className={style.menuIcon}
                src="/icons/node.svg"
                alt="Nodes"
                width={30}
                height={30}
              />
              <span className={style.menuText}>Nodes</span>
            </Link>
          </li>
          <li>
            <Link href="/projects" className={style.menuItem}>
              <Image
                className={style.menuIcon}
                src="/icons/project.svg"
                alt="Projects"
                width={30}
                height={30}
              />
              <span className={style.menuText}>Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/notices" className={style.menuItem}>
              <Image
                className="menuIcon"
                src="/icons/notices.svg"
                alt="Notices"
                width={30}
                height={30}
              />
              <span className={style.menuText}>Notices</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.userArea}>
        <Image src="/icons/user.svg" alt="User" width={30} height={30} />
        <span>John Doe</span>
      </div>
    </nav>
  )
}

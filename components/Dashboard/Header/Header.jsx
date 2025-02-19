import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import Avatar from "../Avatar/Avatar";
import { CgSearch } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import AvatarMobile from "../AvatarMobile/AvatarMobile";

const navLinksList = [
  {
    id: 1,
    nameEn: "Home",
    link: "/",
    image: "/images/home-icon.png",
  },
  {
    id: 2,
    nameEn: "Jobs",
    link: "/jobs",
    image: "/images/bag-icon.png",
  },
  {
    id: 3,
    nameEn: "Employers",
    link: "/employers",
    image: "/images/employers-icon.png",
  },
  {
    id: 4,
    nameEn: "Notifications",
    link: "/notifications",
    image: "/images/notifications-icon.png",
  },
  {
    id: 5,
    nameEn: "Messaging",
    link: "/messaging",
    image: "/images/messaging-icon.png",
  },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.start}>
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={81} height={27} />
          </Link>
          <form className={styles.search}>
            <button className={styles.searchBtn}>
              <FiSearch />
              {/* <Image src="/images/search.png" alt="ic" width={21} height={24} /> */}
            </button>
            <input type="search" placeholder="Search by name, job title, ..." />
          </form>
        </div>
        <ul className={styles.navLinks}>
          {navLinksList.map((navItem) => (
            <li key={navItem.id}>
              <Link href={navItem.link} className={styles.navLink}>
                <Image
                  src={navItem.image}
                  alt="ic"
                  width={36} // Default width
                  height={36} // Default height
                  className="w-9 h-9 md:w-6 md:h-7" // 36px (9) on large screens, 28px (6.5) on smaller
                />
                <span className={styles.linkTxt}>{navItem.nameEn}</span>
              </Link>
              {navItem.id === 3 && <span className={styles.separator} />}
            </li>
          ))}

          <Avatar />
        </ul>
      </div>
      <div className={styles.containerMob}>
        <AvatarMobile />
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={59} height={18} />
        </Link>
      </div>
    </header>
  );
};

export default Header;

import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import AvatarMobile from "../AvatarMobile/AvatarMobile";
import NavLinks from "../Nav/NavLinks/NavLinks";

export const navLinksList = [
  {
    id: 1,
    nameEn: "Home",
    link: "/",
    image: "/images/home-icon.png",
    imageMob: "/images/home-icon-mob.png",
  },
  {
    id: 2,
    nameEn: "Jobs",
    link: "/jobs",
    image: "/images/bag-icon.png",
    imageMob: "/images/bag-icon-mob.png",
  },
  {
    id: 3,
    nameEn: "Employers",
    link: "/employers",
    image: "/images/employers-icon.png",
    imageMob: "/images/employers-icon-mob.png",
  },
  {
    id: 4,
    nameEn: "Notifications",
    link: "/notifications",
    image: "/images/notifications-icon.png",
    imageMob: "/images/notifications-icon-mob.png",
  },
  {
    id: 5,
    nameEn: "Messaging",
    link: "/messaging",
    image: "/images/messaging-icon.png",
    imageMob: "/images/messaging-icon-mob.png",
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
        <NavLinks isForMob={false} close={console.log("")} />
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

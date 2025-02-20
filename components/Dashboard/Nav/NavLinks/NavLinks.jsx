import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { navLinksList } from "../../Header/Header";
import Avatar from "../../Avatar/Avatar";

const NavLinks = ({ isForMob, close }) => {
  return (
    <ul className={isForMob ? styles.navLinksMob : styles.navLinks}>
      {navLinksList.map((navItem) => (
        <li key={navItem.id}>
          <Link
            onClick={close}
            href={navItem.link ? navItem.link : "/"}
            className={styles.navLink}
          >
            {isForMob ? (
              <Image src={navItem.imageMob} alt="ic" width={22} height={22} />
            ) : (
              <Image
                src={navItem.image}
                alt="ic"
                width={36} // Default width
                height={36} // Default height
                className="w-9 h-9 md:w-6 md:h-7" // 36px (9) on large screens, 28px (6.5) on smaller
              />
            )}

            <span className={styles.linkTxt}>{navItem.nameEn}</span>
          </Link>
          {navItem.id === 3 && !isForMob ? (
            <span className={styles.separator} />
          ) : null}
        </li>
      ))}

      {isForMob ? null : <Avatar />}
    </ul>
  );
};

export default NavLinks;

import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProfileDropDownMenu = () => {
  return (
    <div className={styles.profDropMenu}>
      <div className={styles.profInfo}>
        <div className={styles.profTopStart}>
          <div className={styles.profImg}>
            <Image src="/images/user.jpg" alt="user" width={70} height={70} />
          </div>
          <div className={styles.profTitle}>
            <h3 className={styles.userName}>Ahmed Amaar</h3>
            <p className={styles.userTtl}>UX UI designer</p>
          </div>
        </div>

        <button className={styles.goBtn}>
          <FaChevronRight />
          {/* <FaChevronLeft /> */}
        </button>
      </div>

      <div className={styles.profLinks}>
        <Link href="/">Setting and privacy</Link>
        <Link href="/">Language</Link>
        <Link href="/">Help</Link>
      </div>
      <div className={styles.logoutBtn}>
        <button className={styles.btn}>Logout</button>
      </div>
    </div>
  );
};

export default ProfileDropDownMenu;

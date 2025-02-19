import Link from "next/link";
import styles from "./styles.module.scss";

const ProfileLinks = () => {
  return (
    <div className={styles.profileLinks}>
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

export default ProfileLinks;

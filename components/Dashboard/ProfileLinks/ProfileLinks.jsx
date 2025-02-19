import Link from "next/link";
import styles from "./styles.module.scss";

const ProfileLinks = ({ close }) => {
  return (
    <div className={styles.profileLinks}>
      <div className={styles.profLinks}>
        <Link onClick={close} href="/setting-privacy">
          Setting and privacy
        </Link>
        <Link onClick={close} href="/">
          Language
        </Link>
        <Link onClick={close} href="/help">
          Help
        </Link>
      </div>
      <div className={styles.logoutBtn}>
        <button onClick={close} className={styles.btn}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileLinks;

import NavBarContainer from "../NavBarContainer/NavBarContainer";
import styles from "./styles.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <NavBarContainer close={console.log("")} />
    </nav>
  );
};

export default NavBar;

import NavBarContainer from "../NavBarContainer/NavBarContainer";
import styles from "./styles.module.scss";

const NavBarSideMenu = ({ isOpen, close }) => {
  return (
    <div
      className={isOpen ? styles.navBarSideMenu : styles.navBarSideMenuHidden}
    >
      <NavBarContainer />
    </div>
  );
};

export default NavBarSideMenu;

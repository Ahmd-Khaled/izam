import { ToastContainer } from "react-toastify";
import NavBarContainer from "../NavBarContainer/NavBarContainer";
import styles from "./styles.module.scss";

const NavBar = () => {
  const locale = "en";
  return (
    <nav className={styles.nav}>
      <NavBarContainer close={console.log("")} />
      <ToastContainer
        position={locale === "en" ? "bottom-right" : "bottom-left"}
        autoClose={1500}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={locale === "ar"}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </nav>
  );
};

export default NavBar;

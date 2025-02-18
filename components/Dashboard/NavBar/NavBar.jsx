"use client";
import styles from "./styles.module.scss";
import { SlSettings } from "react-icons/sl";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import NavBarList from "../NavBarList/NavBarList";

const NavBar = ({ children }) => {
  const [isDaragDropOpen, setIsDaragDropOpen] = useState(false);

  const handleToggleDragDropList = () => {
    setIsDaragDropOpen((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navHead}>
          <div className={styles.navHeadStart}>
            <span>Menu</span>
          </div>
          <div className={styles.navHeadEnd}>
            {isDaragDropOpen ? (
              <>
                <button
                  onClick={handleToggleDragDropList}
                  className={styles.closeBtn}
                >
                  <IoClose />
                </button>
                <button
                  onClick={handleToggleDragDropList}
                  className={styles.openBtn}
                >
                  <FaCheck />
                </button>
              </>
            ) : (
              <button
                onClick={handleToggleDragDropList}
                className={styles.setBtn}
              >
                <SlSettings />
              </button>
            )}
          </div>
        </div>
        <NavBarList />
        <ul className={styles.navDragDrop}></ul>
      </div>
    </nav>
  );
};

export default NavBar;

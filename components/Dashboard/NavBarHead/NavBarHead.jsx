"use client";
import styles from "./styles.module.scss";
import { SlSettings } from "react-icons/sl";
import { FaArrowLeft, FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
const NavBarHead = ({
  isDaragDropOpen,
  handleToggleDragDropList,
  stepBackHandler,
}) => {
  return (
    <div className={styles.navHead}>
      <div className={styles.navHeadStart}>
        <button onClick={stepBackHandler} className={styles.backBtn}>
          <FaArrowLeft />
        </button>
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
          <button onClick={handleToggleDragDropList} className={styles.setBtn}>
            <SlSettings />
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBarHead;

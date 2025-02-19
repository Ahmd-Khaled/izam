"use client";
import NavBarSideMenu from "@/components/Dashboard/NavBarSideMenu/NavBarSideMenu";
import styles from "./styles.module.scss";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
const MobNavBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.mobNavBtnWrap}>
      <button onClick={handleToggleMenu} className={styles.mobNavBtn}>
        <FaBars />
      </button>
      <NavBarSideMenu isOpen={isOpen} close={handleToggleMenu} />
    </div>
  );
};

export default MobNavBtn;

"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import NavBarDragDrop from "../NavBarDragDrop/NavBarDragDrop";
import NavBarHead from "../NavBarHead/NavBarHead";
import NavBarList from "../NavBarList/NavBarList";

const NavBarContainer = () => {
  const [isDaragDropOpen, setIsDaragDropOpen] = useState(false);

  const handleToggleDragDropList = () => {
    setIsDaragDropOpen((prev) => !prev);
  };
  return (
    <div className={styles.navContainer}>
      <NavBarHead
        isDaragDropOpen={isDaragDropOpen}
        handleToggleDragDropList={handleToggleDragDropList}
      />
      {isDaragDropOpen ? <NavBarDragDrop /> : <NavBarList />}
    </div>
  );
};

export default NavBarContainer;

"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import NavBarDragDrop from "../NavBarDragDrop/NavBarDragDrop";
import NavBarHead from "../NavBarHead/NavBarHead";
import NavBarList from "../NavBarList/NavBarList";

const NavBarContainer = ({ close }) => {
  const [isDaragDropOpen, setIsDaragDropOpen] = useState(false);

  const handleToggleDragDropList = () => {
    setIsDaragDropOpen((prev) => !prev);
  };

  const stepBackHandler = () => {
    if (isDaragDropOpen) {
      handleToggleDragDropList();
    } else {
      close();
    }
  };

  return (
    <div className={styles.navContainer}>
      <NavBarHead
        stepBackHandler={stepBackHandler}
        isDaragDropOpen={isDaragDropOpen}
        handleToggleDragDropList={handleToggleDragDropList}
      />
      {isDaragDropOpen ? <NavBarDragDrop /> : <NavBarList />}
    </div>
  );
};

export default NavBarContainer;

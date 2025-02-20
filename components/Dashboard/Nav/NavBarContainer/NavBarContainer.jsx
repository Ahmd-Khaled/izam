"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import NavBarHead from "../NavBarHead/NavBarHead";
import NavBarList from "../NavBarList/NavBarList";
import DragableMainArea from "../../MainLinks/DragableMainArea/DragableMainArea";

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
      <div className={styles.navListsWraper}>
        {isDaragDropOpen ? (
          <DragableMainArea close={handleToggleDragDropList} />
        ) : (
          <NavBarList openEditMode={handleToggleDragDropList} />
        )}
      </div>
    </div>
  );
};

export default NavBarContainer;

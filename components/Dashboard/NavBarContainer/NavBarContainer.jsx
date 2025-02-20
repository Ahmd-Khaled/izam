"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import NavBarDragDrop from "../NavBarDragDrop/NavBarDragDrop";
import NavBarHead from "../NavBarHead/NavBarHead";
import NavBarList from "../NavBarList/NavBarList";
import useGetNavList from "@/hooks/NavBar/useGetNavList";

const NavBarContainer = ({ close }) => {
  const [isDaragDropOpen, setIsDaragDropOpen] = useState(false);

  const [navList] = useGetNavList();

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
          <NavBarDragDrop navList={navList} close={handleToggleDragDropList} />
        ) : (
          <NavBarList
            navList={navList}
            openEditMode={handleToggleDragDropList}
          />
        )}
      </div>
    </div>
  );
};

export default NavBarContainer;

"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import NavBarDragDrop from "../NavBarDragDrop/NavBarDragDrop";
import NavBarHead from "../NavBarHead/NavBarHead";
import NavBarList from "../NavBarList/NavBarList";
import LongPressWrapper from "@/components/utils/LongPressButton/LongPressButton";
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
      <LongPressWrapper onLongPress={handleToggleDragDropList}>
        <NavBarHead
          stepBackHandler={stepBackHandler}
          isDaragDropOpen={isDaragDropOpen}
          handleToggleDragDropList={handleToggleDragDropList}
        />
      </LongPressWrapper>
      {isDaragDropOpen ? (
        <NavBarDragDrop navList={navList} />
      ) : (
        <NavBarList navList={navList} />
      )}
    </div>
  );
};

export default NavBarContainer;

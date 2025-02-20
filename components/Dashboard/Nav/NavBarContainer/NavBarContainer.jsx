"use client";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import NavBarHead from "../NavBarHead/NavBarHead";
import NavBarList from "../NavBarList/NavBarList";
import DragableMainArea from "../../MainLinks/DragableMainArea/DragableMainArea";
import useAddNavList from "@/hooks/NavBar/useAddNavList";

const NavBarContainer = ({ close }) => {
  const [isDaragDropOpen, setIsDaragDropOpen] = useState(false);

  const [submitNewList, isLoading] = useAddNavList();

  const handleSetList = (list) => {
    // setItems(list);
    // close();
  };

  const handleSubmitNewList = () => {
    // submitNewList(items);
  };

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
        handleSubmitNewList={handleSubmitNewList}
        isLoading={isLoading}
      />
      <div className={styles.navListsWraper}>
        {isDaragDropOpen ? (
          <DragableMainArea
            handleSetList={handleSetList}
            close={handleToggleDragDropList}
          />
        ) : (
          <NavBarList openEditMode={handleToggleDragDropList} />
        )}
      </div>
    </div>
  );
};

export default NavBarContainer;

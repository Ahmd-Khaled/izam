"use client";
import { useState } from "react";
import styles from "./styles.module.scss";

const SwipeButton = () => {
  const [isOn, setIsOn] = useState(false);
  const switchHandler = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <button
      onClick={switchHandler}
      className={isOn ? styles.swipeButtonOn : styles.swipeButtonOff}
    >
      <span className={isOn ? styles.on : styles.off}></span>
    </button>
  );
};

export default SwipeButton;

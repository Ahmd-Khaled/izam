"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import ProfileDropDownMenu from "../ProfileDropDownMenu/ProfileDropDownMenu";
import { useEffect, useRef, useState } from "react";

const Avatar = () => {
  const btnRef = useRef();
  const listRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const openOptionHandler = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    let handler = (e) => {
      if (
        !btnRef.current?.contains(e.target) &&
        !listRef.current?.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      if (isOpen) {
        document.removeEventListener("mousedown", handler);
      }
    };
  }, []);
  return (
    <div className={styles.avatar}>
      <button className={styles.avBtn} onClick={openOptionHandler} ref={btnRef}>
        <div className={styles.avImage}>
          <Image src="/images/user.jpg" alt="user" width={30} height={30} />
        </div>
        <div className={styles.avTxt}>
          <span>Profile</span>
          {isOpen ? <FaCaretUp /> : <FaCaretDown />}
        </div>
      </button>
      {isOpen ? (
        <div className={styles.profDropdown} ref={listRef}>
          <ProfileDropDownMenu />
        </div>
      ) : null}
    </div>
  );
};

export default Avatar;

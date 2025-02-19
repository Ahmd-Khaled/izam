"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";
const AvatarMobile = () => {
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
    <div className={styles.avatarMob}>
      <button className={styles.avBtn} onClick={openOptionHandler} ref={btnRef}>
        <div className={styles.avImage}>
          <Image src="/images/user.jpg" alt="user" width={42} height={42} />
        </div>
        <div className={styles.avIcon}>
          <FaBars />
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

export default AvatarMobile;

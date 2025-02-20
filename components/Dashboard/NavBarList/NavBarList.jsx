"use client";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from "react";
import LongPressWrapper from "@/components/utils/LongPressButton/LongPressButton";

const NavBarList = ({ navList, openEditMode }) => {
  const [isMainLinkOpen, setIsMainLinkOpen] = useState(false);
  const [clickedMainLink, setClickedMainLink] = useState(null);

  const handleToggleMainLink = (id) => {
    setIsMainLinkOpen((prev) => !prev);
    setClickedMainLink(id);
  };

  return (
    <div className={styles.navBarList}>
      <LongPressWrapper onLongPress={openEditMode}>
        <ul className={styles.navList}>
          {navList?.map((item) => (
            <li key={item?.id} className={styles.navItem}>
              <div className={styles.navMainLink}>
                <Link
                  href={
                    item?.title === "Qualifications"
                      ? "/qualifications"
                      : item?.target
                  }
                >
                  <h4>{item?.title}</h4>
                </Link>

                {item?.children && item?.children?.length > 0 ? (
                  <button
                    className={styles.subLinkBtn}
                    onClick={() => handleToggleMainLink(item?.id)}
                  >
                    {isMainLinkOpen && clickedMainLink === item?.id ? (
                      <FaAngleUp />
                    ) : (
                      <FaAngleDown />
                    )}
                  </button>
                ) : null}
              </div>
              {item?.children &&
              item?.children?.length > 0 &&
              isMainLinkOpen &&
              clickedMainLink === item?.id ? (
                <ul className={styles.navSubLinks}>
                  {item?.children?.map((child) => (
                    <li key={child?.id} className={styles.navSubItem}>
                      <Link
                        className={styles.navSubLink}
                        href={
                          item?.title === "Qualifications"
                            ? `/qualifications${child?.target}`
                            : child?.target
                        }
                      >
                        <h3>{child?.title}</h3>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </LongPressWrapper>
    </div>
  );
};

export default NavBarList;

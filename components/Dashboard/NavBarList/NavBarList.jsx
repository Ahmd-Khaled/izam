"use client";
import useGetNavList from "@/hooks/NavBar/useGetNavList";
import styles from "./styles.module.scss";
import Link from "next/link";
import { domainUrl } from "@/hooks/urls";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from "react";

const NavBarList = () => {
  const [isMainLinkOpen, setIsMainLinkOpen] = useState(false);
  const [clickedMainLink, setClickedMainLink] = useState(null);

  const handleToggleMainLink = (id) => {
    setIsMainLinkOpen((prev) => !prev);
    setClickedMainLink(id);
  };

  const [navList] = useGetNavList();
  // console.log("------------------navList:", navList);
  return (
    <div className={styles.navBarList}>
      <ul className={styles.navList}>
        {navList?.map((item) => (
          <li key={item?.id} className={styles.navItem}>
            <Link
              className={styles.navMainLink}
              href={`${domainUrl}${item?.target}`}
              onClick={() => handleToggleMainLink(item?.id)}
            >
              <h4>{item?.title}</h4>
              {item?.children && item?.children?.length > 0 ? (
                <>
                  {isMainLinkOpen && clickedMainLink === item?.id ? (
                    <FaAngleUp />
                  ) : (
                    <FaAngleDown />
                  )}
                </>
              ) : null}
            </Link>
            {item?.children &&
            item?.children?.length > 0 &&
            isMainLinkOpen &&
            clickedMainLink === item?.id ? (
              <ul className={styles.navSubLinks}>
                {item?.children?.map((child) => (
                  <li key={child?.id} className={styles.navSubItem}>
                    <Link
                      className={styles.navSubLink}
                      href={`${domainUrl}${child?.target}`}
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
    </div>
  );
};

export default NavBarList;

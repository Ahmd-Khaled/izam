"use client";
import useGetNavList from "@/hooks/NavBar/useGetNavList";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NavBarList = () => {
  const [isMainLinkOpen, setIsMainLinkOpen] = useState(false);
  const [clickedMainLink, setClickedMainLink] = useState(null);
  const pathname = usePathname();

  // console.log("----------------------pathname:", pathname);

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
    </div>
  );
};

export default NavBarList;

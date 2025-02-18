"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
const SortingBy = ({ defaultSort, sortList }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedSort, setSelectedSort] = useState(defaultSort);

  const btnRef = useRef();
  const listRef = useRef();

  const toggleMenu = () => {
    setIsClicked((prev) => !prev);
  };

  const handleSort = (sortItem) => {
    setSelectedSort(sortItem);
    setIsClicked(false);
  };

  useEffect(() => {
    let handler = (e) => {
      if (
        !btnRef.current?.contains(e.target) &&
        !listRef.current?.contains(e.target)
      ) {
        setIsClicked(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      if (isClicked) {
        document.removeEventListener("mousedown", handler);
      }
    };
  }, []);
  return (
    <div className={isClicked ? styles.sortByClicked : styles.sortBy}>
      <button ref={btnRef} onClick={toggleMenu} className={styles.srtBtn}>
        <span className={styles.srtTxt}>Sorting by:</span>
        <span className={styles.srtSelected}>{selectedSort.nameEn}</span>
        {isClicked ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {isClicked ? (
        <ul ref={listRef} className={styles.sortMenu}>
          {sortList.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSort(item)}
              className={
                selectedSort.id === item.id
                  ? styles.sortItemActive
                  : styles.sortItem
              }
            >
              {item.nameEn}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SortingBy;

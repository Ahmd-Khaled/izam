import styles from "./styles.module.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <ul className={styles.paginationList}>
        <li className={styles.pageItem}>
          <FaChevronLeft />
        </li>
        <li className={styles.pageItemActive}>1</li>
        <li className={styles.pageItem}>2</li>
        <li className={styles.pageItem}>3</li>
        <li className={styles.pageItem}>
          <FaChevronRight />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

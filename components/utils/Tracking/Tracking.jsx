import { MdOutlineMoveDown, MdOutlineMoveUp } from "react-icons/md";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Tracking = ({ from, to }) => {
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    if (from < to) {
      setDirection("down");
    } else if (from > to) {
      setDirection("up");
    } else {
      setDirection(null);
    }

    const timer = setTimeout(() => {
      setDirection(null);
    }, 1500);

    return () => clearTimeout(timer);
  }, [from, to]);

  return (
    <div className={styles.trackingContainer}>
      {direction === "down" && <MdOutlineMoveDown className={styles.icon} />}
      {direction === "up" && <MdOutlineMoveUp className={styles.icon} />}
    </div>
  );
};

export default Tracking;

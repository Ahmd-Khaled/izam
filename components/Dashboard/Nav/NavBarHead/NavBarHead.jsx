"use client";
import styles from "./styles.module.scss";
import { SlSettings } from "react-icons/sl";
import { FaArrowLeft, FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Loader from "@/components/utils/Loader/Loader";

import { useDispatch, useSelector } from "react-redux";
import { addListItem } from "@/redux/slices/listSlice";

const NavBarHead = ({
  isDaragDropOpen,
  handleToggleDragDropList,
  stepBackHandler,
  handleSubmitNewList,
  isLoading,
}) => {
  const { newList, items, status, error } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(addListItem(newList));
  };

  console.log("*********** ******* Status:", status);
  return (
    <div className={styles.navHead}>
      <div className={styles.navHeadStart}>
        <button onClick={stepBackHandler} className={styles.backBtn}>
          <FaArrowLeft />
        </button>
        <span>Menu</span>
      </div>
      <div className={styles.navHeadEnd}>
        {isDaragDropOpen ? (
          <>
            <Loader isLoading={status === "loading"} />
            <button
              onClick={handleToggleDragDropList}
              className={styles.closeBtn}
            >
              <IoClose />
            </button>
            <button onClick={submit} className={styles.openBtn}>
              <FaCheck />
            </button>
          </>
        ) : (
          <button onClick={handleToggleDragDropList} className={styles.setBtn}>
            <SlSettings />
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBarHead;

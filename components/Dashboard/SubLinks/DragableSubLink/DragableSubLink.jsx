"use client";
import styles from "./styles.module.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RxDragHandleDots2 } from "react-icons/rx";

const DragableSubLink = ({ id, child }) => {
  const [isEditable, setIsEditable] = useState(true);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEdite = (event) => {
    // event.stopPropagation();
    setIsEditable((prev) => !prev);
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      key={child?.id}
      className={styles.navSubItem}
    >
      <div className={styles.navSubLink}>
        <div
          {...(isEditable && listeners)}
          className={isEditable ? styles.subLinkTtl : styles.subLinkTtlDimt}
        >
          <RxDragHandleDots2 />
          <h3>{child?.title}</h3>
        </div>
        <div className={styles.subLinkBtns}>
          <button onClick={toggleEdite} className={styles.editBtn}>
            <MdOutlineModeEditOutline />
          </button>
          <button onClick={toggleEdite} className={styles.viewBtn}>
            {isEditable ? <ImEye /> : <ImEyeBlocked />}
          </button>
        </div>
      </div>
    </li>
  );
};

export default DragableSubLink;

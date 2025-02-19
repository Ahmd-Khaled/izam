"use client";
import styles from "./styles.module.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { RxDragHandleDots2 } from "react-icons/rx";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { useState } from "react";
const DragableItem = ({ id, item }) => {
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
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className={styles.dragableItem}
    >
      <div
        // {...listeners}
        {...(isEditable && listeners)}
        className={isEditable ? styles.dragItemTitle : styles.dragItemTitleDimt}
      >
        <RxDragHandleDots2 />
        <h4>
          {item.id}-{item.title}
        </h4>
      </div>
      <div className={styles.dragItemIcons}>
        <button onClick={toggleEdite} className={styles.editBtn}>
          <MdOutlineModeEditOutline />
        </button>
        <button onClick={toggleEdite} className={styles.viewBtn}>
          {isEditable ? <ImEye /> : <ImEyeBlocked />}
        </button>
      </div>
    </div>
  );
};

export default DragableItem;

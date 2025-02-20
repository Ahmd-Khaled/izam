"use client";
import { updateTitle } from "@/redux/slices/listSlice";
import styles from "./styles.module.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RxDragHandleDots2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { updateTitleById } from "@/hooks/functions/updateTitleById";

const DragableSubLink = ({ id, child }) => {
  const dispatch = useDispatch();
  const { newList, items, status, error } = useSelector((state) => state.list);

  const [isEditable, setIsEditable] = useState(true);
  const [editTitle, setEditTitle] = useState(false);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  // ---------------
  const enableEdite = () => {
    setIsEditable(true);
    setEditTitle(true);
  };

  const toggleEdite = () => {
    setEditTitle(false);
    setIsEditable((prev) => !prev);
  };

  const handleUpdateTitle = (e, id) => {
    const updatedList = updateTitleById(newList, id, e.target.value);
    dispatch(updateTitle(updatedList));
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
        <div className={isEditable ? styles.subLinkTtl : styles.subLinkTtlDimt}>
          <div className={styles.dragIcon} {...(isEditable && listeners)}>
            <RxDragHandleDots2 />
          </div>
          <div className={styles.inputBox}>
            <input
              onChange={(e) => handleUpdateTitle(e, child.id)}
              readOnly={!editTitle}
              type="text"
              placeholder={child.title}
              className={
                editTitle ? styles.editableInput : styles.disabledInput
              }
            />
          </div>
        </div>
        <div className={styles.subLinkBtns}>
          <button onClick={enableEdite} className={styles.editBtn}>
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

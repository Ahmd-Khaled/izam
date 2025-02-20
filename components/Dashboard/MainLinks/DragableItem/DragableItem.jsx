"use client";
import styles from "./styles.module.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { RxDragHandleDots2 } from "react-icons/rx";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { useState } from "react";
import Link from "next/link";
import DragableSubLinksArea from "../../SubLinks/DragableSubLinksArea/DragableSubLinksArea";
import { useDispatch, useSelector } from "react-redux";
import { updateTitle } from "@/redux/slices/listSlice";
import { updateTitleById } from "@/hooks/functions/updateTitleById";

const DragableItem = ({ id, item }) => {
  const dispatch = useDispatch();
  const { newList, items, status, error } = useSelector((state) => state.list);

  const [isEditable, setIsEditable] = useState(true);
  const [editTitle, setEditTitle] = useState(false);

  const [isMainLinkOpen, setIsMainLinkOpen] = useState(true);
  const [clickedMainLink, setClickedMainLink] = useState(null);

  const handleToggleMainLink = (id) => {
    setIsMainLinkOpen((prev) => !prev);
    setClickedMainLink(id);
  };

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

  // -------------------------------
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      // {...listeners}
      className={styles.dragableItem}
    >
      <div className={styles.dragableItemWrap}>
        <div
          onClick={() => handleToggleMainLink(item?.id)}
          className={
            isEditable ? styles.dragItemTitle : styles.dragItemTitleDimt
          }
        >
          <div className={styles.dragIcon} {...(isEditable && listeners)}>
            <RxDragHandleDots2 />
          </div>
          {/* <h4>{item.title}</h4> */}
          <div className={styles.inputBox}>
            <input
              onChange={(e) => handleUpdateTitle(e, item.id)}
              readOnly={!editTitle}
              type="text"
              placeholder={item.title}
              className={
                editTitle ? styles.editableInput : styles.disabledInput
              }
            />
          </div>
        </div>
        <div className={styles.dragItemIcons}>
          <button onClick={enableEdite} className={styles.editBtn}>
            <MdOutlineModeEditOutline />
          </button>
          <button onClick={toggleEdite} className={styles.viewBtn}>
            {isEditable ? <ImEye /> : <ImEyeBlocked />}
          </button>
        </div>
      </div>
      {item?.children && isMainLinkOpen && clickedMainLink === item?.id ? (
        <DragableSubLinksArea
          childrens={item?.children ? item?.children : []}
        />
      ) : null}
    </div>
  );
};

export default DragableItem;

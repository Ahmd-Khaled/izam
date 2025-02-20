"use client";
import styles from "./styles.module.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { RxDragHandleDots2 } from "react-icons/rx";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { useState } from "react";
import Link from "next/link";
import DragableSubLinksArea from "../SubLinks/DragableSubLinksArea/DragableSubLinksArea";
const DragableItem = ({ id, item }) => {
  const [isEditable, setIsEditable] = useState(true);

  const [isMainLinkOpen, setIsMainLinkOpen] = useState(true);
  const [clickedMainLink, setClickedMainLink] = useState(null);

  const handleToggleMainLink = (id) => {
    setIsMainLinkOpen((prev) => !prev);
    setClickedMainLink(id);
  };

  const closeSubLinksHandler = () => {
    setIsMainLinkOpen(false);
  };
  // -------------------------------
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
      <div className={styles.dragableItemWrap}>
        <div
          // {...listeners}
          {...(isEditable && listeners)}
          className={
            isEditable ? styles.dragItemTitle : styles.dragItemTitleDimt
          }
        >
          <RxDragHandleDots2 />
          <h4>{item.title}</h4>
        </div>
        <div className={styles.dragItemIcons}>
          <button
            onClick={() => handleToggleMainLink(item?.id)}
            className={styles.editBtn}
          >
            <MdOutlineModeEditOutline />
          </button>
          <button
            onClick={() => {
              toggleEdite();
              closeSubLinksHandler();
            }}
            className={styles.viewBtn}
          >
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

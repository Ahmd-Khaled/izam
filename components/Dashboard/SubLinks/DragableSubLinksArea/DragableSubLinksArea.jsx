"use client";
import styles from "./styles.module.scss";
import DragableSubLinks from "../DragableSubLinks/DragableSubLinks";
import { useEffect, useState } from "react";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";

import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useDispatch, useSelector } from "react-redux";
import { trackListItem, updateList } from "@/redux/slices/listSlice";

const DragableSubLinksArea = ({ childrens }) => {
  const [subLinks, setSubLinks] = useState(childrens);
  const dispatch = useDispatch();
  const { newList, items, status, error } = useSelector((state) => state.list);

  useEffect(() => {
    setSubLinks(childrens);
  }, [childrens]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getTaskPos = (id) => subLinks.findIndex((elem) => elem.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    const originalPos = getTaskPos(active.id);
    const newPos = getTaskPos(over.id);

    setSubLinks((subLinks) => {
      return arrayMove(subLinks, originalPos, newPos);
    });

    // ------- Track the list item -----------
    const track = { id: active.id, from: originalPos, to: newPos };
    dispatch(trackListItem(track));
  };

  // console.log("----------------- subLinks: ", subLinks);

  useEffect(() => {
    const updatedData = newList.map((item) => {
      if (
        item.children &&
        item.children.some((child) => child.id === subLinks[0].id)
      ) {
        return { ...item, children: subLinks };
      }
      return item;
    });

    dispatch(updateList(updatedData));
  }, [subLinks]);

  return (
    <div className={styles.dragableSubLinksArea}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <DragableSubLinks subLinks={subLinks} />
      </DndContext>
    </div>
  );
};

export default DragableSubLinksArea;

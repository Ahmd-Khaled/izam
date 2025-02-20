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

const DragableSubLinksArea = ({ childrens }) => {
  const [subLinks, setSubLinks] = useState(childrens);

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

    setSubLinks((subLinks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(subLinks, originalPos, newPos);
    });
  };

  console.log("----------------- subLinks: ", subLinks);

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

"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import DragableMainItems from "../DragableMainItems/DragableMainItems";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";

import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

const NavBarDragDrop = ({ navList }) => {
  const [items, setItems] = useState(navList);
  // const [tasks, setTasks] = useState(navList);

  useEffect(() => {
    setItems(navList);
  }, [navList]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getTaskPos = (id) => items.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setItems((items) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(items, originalPos, newPos);
    });
  };

  console.log("----------------- Items: ", items);

  return (
    <div className={styles.navBarDragDrop}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <DragableMainItems items={items} />
      </DndContext>
    </div>
  );
};

export default NavBarDragDrop;

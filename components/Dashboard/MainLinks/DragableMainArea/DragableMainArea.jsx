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
import { useDispatch, useSelector } from "react-redux";
import { fetchListItems, updateList } from "@/redux/slices/listSlice";

const DragableMainArea = ({ handleSetList, close }) => {
  const dispatch = useDispatch();
  const { newList, items, status, error } = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(fetchListItems());
    dispatch(updateList(items));
  }, [dispatch]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getTaskPos = (id) => newList.findIndex((elem) => elem.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;
    const originalPos = getTaskPos(active.id);
    const newPos = getTaskPos(over.id);

    // -------- Update list----
    dispatch(updateList(arrayMove(newList, originalPos, newPos)));
  };

  return (
    <div className={styles.navBarDragDrop}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <DragableMainItems />
      </DndContext>
      <div className={styles.cancelBtn}>
        <button onClick={close}>Cancel</button>
      </div>
    </div>
  );
};

export default DragableMainArea;

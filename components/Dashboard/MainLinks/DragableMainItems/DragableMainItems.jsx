"use client";
import { useDispatch, useSelector } from "react-redux";
import DragableItem from "../DragableItem/DragableItem";
import styles from "./styles.module.scss";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { fetchListItems } from "@/redux/slices/listSlice";
import { useEffect } from "react";

const DragableMainItems = () => {
  const dispatch = useDispatch();
  const { newList, items, status, error } = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(fetchListItems());
  }, [dispatch]);

  return (
    <div className={styles.dragableMainItems}>
      <SortableContext items={newList} strategy={verticalListSortingStrategy}>
        {newList?.map((item) => (
          <DragableItem key={item.id} item={item} id={item.id} />
        ))}
      </SortableContext>
    </div>
  );
};

export default DragableMainItems;

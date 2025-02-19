import DragableItem from "../DragableItem/DragableItem";
import styles from "./styles.module.scss";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const DragableMainItems = ({ items }) => {
  return (
    <div className={styles.dragableMainItems}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items?.map((item) => (
          <DragableItem key={item.id} item={item} id={item.id} />
        ))}
      </SortableContext>
    </div>
  );
};

export default DragableMainItems;

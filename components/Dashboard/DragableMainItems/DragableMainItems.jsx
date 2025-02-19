import DragableItem from "../DragableItem/DragableItem";
import styles from "./styles.module.scss";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const DragableMainItems = ({ tasks }) => {
  return (
    <div className={styles.dragableMainItems}>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks?.map((task) => (
          <DragableItem key={task.id} id={task.id} title={task.title} />
        ))}
      </SortableContext>
    </div>
  );
};

export default DragableMainItems;

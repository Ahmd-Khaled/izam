import styles from "./styles.module.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const DragableSubLink = ({ id, child }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      key={child?.id}
      className={styles.navSubItem}
    >
      <div className={styles.navSubLink}>
        <h3>{child?.title}</h3>
      </div>
    </li>
  );
};

export default DragableSubLink;

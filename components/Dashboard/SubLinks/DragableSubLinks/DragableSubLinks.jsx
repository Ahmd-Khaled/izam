import DragableSubLink from "../DragableSubLink/DragableSubLink";
import styles from "./styles.module.scss";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const DragableSubLinks = ({ subLinks }) => {
  return (
    <ul className={styles.dragableSubLinks}>
      <SortableContext items={subLinks} strategy={verticalListSortingStrategy}>
        {subLinks?.map((child) => (
          <DragableSubLink key={child.id} child={child} id={child?.id} />
        ))}
      </SortableContext>
    </ul>
  );
};

export default DragableSubLinks;

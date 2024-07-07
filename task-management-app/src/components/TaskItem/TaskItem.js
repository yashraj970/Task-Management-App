import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskStatus } from "../../store/taskSlice";
import styles from "./TaskItem.module.css";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.taskItem}>
      <span className={task.completed ? styles.completed : ""}>
        {task.title}
      </span>
      <div className={styles.actions}>
        <button
          onClick={() => dispatch(toggleTaskStatus(task.id))}
          className={task.completed ? styles.undoButton : styles.completeButton}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className={styles.deleteButton}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

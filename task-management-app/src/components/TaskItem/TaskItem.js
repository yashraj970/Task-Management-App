import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskStatus } from "../../store/taskSlice";
import styles from "./TaskItem.module.css";
import { notifyError, notifySuccess } from "../../utilities/toast";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handletoggleTaskStatus = () => {
    dispatch(toggleTaskStatus(task.id));
    notifySuccess("Task Status Changed");
  };

  const handledeleteTask = () => {
    dispatch(deleteTask(task.id));
    notifyError("Task Deleted");
  };

  return (
    <li className={styles.taskItem}>
      <span className={task.completed ? styles.completed : ""}>
        {task.title}
      </span>
      <div className={styles.actions}>
        <button
          onClick={handletoggleTaskStatus}
          className={task.completed ? styles.undoButton : styles.completeButton}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={handledeleteTask} className={styles.deleteButton}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

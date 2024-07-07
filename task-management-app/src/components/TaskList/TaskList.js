import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./TaskList.module.css";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className={styles.container}>
      <div className={styles.filterButtons}>
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? styles.active : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={filter === "completed" ? styles.active : ""}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("pending")}
          className={filter === "pending" ? styles.active : ""}
        >
          Pending
        </button>
      </div>
      <ul className={styles.taskList}>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";
import styles from "./TaskForm.module.css";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      setError("Task title cannot be empty");
      return;
    }
    dispatch(addTask({ id: Date.now(), title, completed: false }));
    setTitle("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add Task
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default TaskForm;

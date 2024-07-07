import React from "react";
import styles from "./Home.module.css";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Task Management App</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;

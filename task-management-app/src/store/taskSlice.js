import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Error loading from localStorage", e);
    return [];
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("tasks", serializedState);
  } catch (e) {
    console.warn("Error saving to localStorage", e);
  }
};

const initialState = {
  tasks: loadFromLocalStorage(),
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveToLocalStorage(state.tasks);
    },
    updateTask: (state, action) => {
      const { id, title, completed } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        existingTask.title = title;
        existingTask.completed = completed;
      }
      saveToLocalStorage(state.tasks);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveToLocalStorage(state.tasks);
    },
    toggleTaskStatus: (state, action) => {
      const existingTask = state.tasks.find(
        (task) => task.id === action.payload
      );
      if (existingTask) {
        existingTask.completed = !existingTask.completed;
      }
      saveToLocalStorage(state.tasks);
    },
  },
});

export const { addTask, updateTask, deleteTask, toggleTaskStatus } =
  taskSlice.actions;
export default taskSlice.reducer;

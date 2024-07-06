import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, title, completed } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        existingTask.title = title;
        existingTask.completed = completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskStatus: (state, action) => {
      const existingTask = state.tasks.find(
        (task) => task.id === action.payload
      );
      if (existingTask) {
        existingTask.completed = !existingTask.completed;
      }
    },
  },
});

export const { addTask, updateTask, deleteTask, toggleTaskStatus } =
  taskSlice.actions;
export default taskSlice.reducer;

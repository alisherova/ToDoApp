import { configureStore } from "@reduxjs/toolkit";
import { toDoRerducer } from "./ToDoReducer";

const store = configureStore({
  reducer: toDoRerducer,
});

export default store;

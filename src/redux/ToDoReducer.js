import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [
  { key: 1, id: 1, todo: "Check the email", completed: false },
  { key: 2, id: 2, todo: "Walk the dog", completed: false },
  { key: 3, id: 3, todo: "Go to gym", completed: false },
];

const ToDoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      return [...state, action.payload];
    },
    removeTodos: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    completeTodos: (state, action) => {
      let from = 0;
      state.map((todo, index) => {
        if (todo.id === action.payload) {
          todo.completed = true;
          from = index;
          return (state = state.splice(
            state.length,
            0,
            state.splice(from, 1)[0]
          ));
        }
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completeTodos, toggleTodo } =
  ToDoSlice.actions;
export const toDoRerducer = ToDoSlice.reducer;

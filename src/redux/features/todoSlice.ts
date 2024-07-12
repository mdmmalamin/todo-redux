import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((item) => item.id === action.payload);
      task!.isCompleted = !task?.isCompleted;

      // function removeCompletedTask(value, index, arr) {
      //   if (value.isCompleted === true) {
      //     arr.splice(index, 1);
      //     return true;
      //   }
      //   return false;
      // }

      // const x = state.todos.filter(removeCompletedTask);
      // console.log(x);
      // state.todos.push(x?.[0]);
    },
  },
});

export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;

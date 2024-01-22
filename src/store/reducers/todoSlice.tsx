import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TodoState {
  todoList: (Record<string, any>)[];
}

const initialState: TodoState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Record<string, any>>) => {
      state.todoList = [...state.todoList, action.payload];
    },
    removeTodoData: (state, action: PayloadAction<{ id: string }>) => {
      const filteredData = state.todoList.filter((elem) => elem.id !== action.payload.id);
      state.todoList = filteredData;
    },
    updateTodoData: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.todoList.findIndex((elem) => elem.id === action.payload.id);
      // console.log(index, action.payload);
      state.todoList[index] = action.payload;
    },
  },
});

export const { addTodo, removeTodoData, updateTodoData } = todoSlice.actions;
export default todoSlice.reducer;

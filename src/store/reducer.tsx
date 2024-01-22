// src/redux/reducers.ts
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import todoReducer from './reducers/todoSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export { rootReducer };

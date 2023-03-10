import { configureStore } from '@reduxjs/toolkit'
import {userReducer} from "./reducers/userReducer";
import {todoReducer} from "./reducers/todoReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer,
  }
} )

export type RootState = ReturnType<typeof store.getState>
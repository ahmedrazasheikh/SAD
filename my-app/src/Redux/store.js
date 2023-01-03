import { configureStore } from '@reduxjs/toolkit'
import Login from './loginSlice'
export const store = configureStore({
  reducer: {
    boolean : Login,
  },
})
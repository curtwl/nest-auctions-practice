import { configureStore } from "@reduxjs/toolkit"
import NotificationsReducer from "./notificationsReducer.js"

export const store = configureStore({
  reducer: {
    notifications: NotificationsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
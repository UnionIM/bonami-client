import { userReducer } from "./Reducer/userReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({ reducer: userReducer });

export type RootState = ReturnType<typeof store.getState>;

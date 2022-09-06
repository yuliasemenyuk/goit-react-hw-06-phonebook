import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { contactsSlice } from "./myValue/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});

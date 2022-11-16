import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  contacts: [],
  filter: "",
};

const contactsSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    filterContacts: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

const persistConfig = {
  key: "contacts",
  storage,
};

export const Reducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;

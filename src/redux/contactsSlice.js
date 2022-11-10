import { createSlice, nanoid } from "@reduxjs/toolkit";

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

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

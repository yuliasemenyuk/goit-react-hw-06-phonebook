import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Filter from "./Filter/Filter";
import { Form } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import { addContact, deleteContact } from "../redux/contactsSlice";

import style from "./App.module.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux/lib/exports";
import { store } from "../redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <div className={style.container}>
        <h1 className={style.title}>Phonebook</h1>
        <Form onSubmit={addContact} />
        <h2 className={style.title}>Contacts</h2>
        <Filter />
        <ContactList onDeleteContact={deleteContact} />
        <ToastContainer autoClose={2000} />
      </div>
    </Provider>
  );
};

import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Filter from "./Filter/Filter";
import { Form } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import { addContact, deleteContact } from "../redux/contactsSlice";

import style from "./App.css";
import { Provider } from "react-redux/lib/exports";
import { store } from "../redux/store";

export const App = () => {
  // return(
  //   <Layout>
  //     <AppBar />
  //     <TaskForm />
  //     <TaskList />
  //   </Layout>
  // );
  // const dispatch = useDispatch();
  // // console.log(value);

  // const [filter, setFilter] = useState("");

  // const addContact = ({ name, number }) => {
  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //   if (
  //     contacts.find(
  //       (contact) => contact.name.toLowerCase() === name.toLowerCase()
  //     )
  //   ) {
  //     return alert(`${name} is already in contacts`);
  //   }
  //   setContacts([...contacts, newContact]);
  // };

  // const deleteContact = (contactId) => {
  //   setContacts(contacts.filter((c) => c.id !== contactId));
  // };

  // const contactFind = (evt) => {
  //   setFilter(evt.currentTarget.value);
  // };

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // useEffect(() => {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Provider store={store}>
      <div className={style.container}>
        <h1 className={style.title}>Phonebook</h1>
        <Form onSubmit={addContact} />
        <h2 className={style.title}>Contacts</h2>
        <Filter />
        <ContactList onDeleteContact={deleteContact} />
        <ToastContainer />
      </div>
    </Provider>
  );
};

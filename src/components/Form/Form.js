import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
// import propTypes from "prop-types";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux/lib/exports";
import { getContacts } from "../../redux/selectors";
import { addContact } from "../../redux/contactsSlice";
import style from "./Form.module.css";

export const Form = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameInputChange = (evt) => {
    setName(evt.target.value);
  };

  const handleNumberInputChange = (evt) => {
    setNumber(evt.target.value);
  };

  const contacts = useSelector(getContacts);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.warning(`${name} is already in contacts`);
    }
    dispatch(addContact(name, number));
    reset();
    // console.log(name, number);
  };

  const reset = () => {
    setName("");
    setNumber("");
    console.log("це ресет");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={style.saving_lable}>
        Name{" "}
        <input
          className={style.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleNameInputChange}
        />
      </label>
      <label className={style.saving_lable}>
        Number
        <input
          className={style.input}
          type="number"
          name="number"
          value={number}
          required
          onChange={handleNumberInputChange}
        />
      </label>
      <button
        className={style.saving_btn}
        onSubmit={handleSubmit}
        type="submit"
      >
        Add contact
      </button>
    </form>
  );
};

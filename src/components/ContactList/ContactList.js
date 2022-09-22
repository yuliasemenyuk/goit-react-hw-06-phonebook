import React from "react";
import propTypes from "prop-types";
import { ContactItem } from "../ContactItem/ContactItem";
import { useSelector } from "react-redux";
import dispatch from "../App";

function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem contactItem={{ name, number, id }}></ContactItem>
          <button onClick={() => dispatch(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  onDeleteContact: propTypes.func.isRequired,
};

export default ContactList;

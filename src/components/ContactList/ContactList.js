// import React from "react";
// import propTypes from "prop-types";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { ContactItem } from "../ContactItem/ContactItem";
import { addContact, deleteContact } from "../../redux/contactsSlice";

export const ContactList = () => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact());

  const contacts = useSelector((state) => state.contacts.contacts);
  console.log(contacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem contactItem={{ name, number, id }}></ContactItem>
          <button onClick={handleDelete}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
// function ContactList() {
//   const contacts = useSelector((state) => state.contacts);
//   return (
//     <ul>
//       {contacts.map(({ id, name, number }) => (
//         <li key={id}>
//           <ContactItem contactItem={{ name, number, id }}></ContactItem>
//           <button>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// ContactList.propTypes = {
//   contacts: propTypes.array.isRequired,
//   onDeleteContact: propTypes.func.isRequired,
// };

// export default ContactList;

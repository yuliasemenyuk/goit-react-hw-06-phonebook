import React from "react";
import propTypes from "prop-types";
// import { useDispatch } from "react-redux";
// import { addContact, deleteContact } from "../../redux/contactsSlice";

// export const ContactItem = ({ contactItem }) => {
//   const dispatch = useDispatch();

//   // const hendleAdd = () => addContact()
//   const hendleDelete = () => dispatch(deleteContact(contactItem.id));

//   return (
//     <p>
//         {contactItem.name}: {contactItem.number}
//    </p>
//   )
// }

export const ContactItem = ({ contactItem }) => (
  <p>
    {contactItem.name}: {contactItem.number}
  </p>
);

// ContactItem.propTypes = {
//   contactItem: propTypes.object.isRequired,
// };

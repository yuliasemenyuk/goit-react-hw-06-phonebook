import React from "react";
import { useSelector } from "react-redux";
import propTypes from "prop-types";

export const ContactItem = () => {
  const name = useSelector((state) => state.contacts.name);
  const number = useSelector((state) => state.contacts.number);
  return (
    <p>
      {name}: {number}
    </p>
  );
};

// const ContactItem = ({ contactItem }) => (
//   <p>
//     {contactItem.name}: {contactItem.number}
//   </p>
// );

ContactItem.propTypes = {
  contactItem: propTypes.object.isRequired,
};

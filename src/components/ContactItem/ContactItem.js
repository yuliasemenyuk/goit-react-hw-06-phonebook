export const ContactItem = ({ contactItem }) => (
  <p>
    {contactItem.name}: {contactItem.number}
  </p>
);

// ContactItem.propTypes = {
//   contactItem: propTypes.object.isRequired,
// };

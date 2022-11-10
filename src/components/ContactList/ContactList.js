import { useDispatch, useSelector } from "react-redux";
import { ContactItem } from "../ContactItem/ContactItem";
import { deleteContact } from "../../redux/contactsSlice";
import { getFilterValue, getContacts } from "../../redux/selectors";

export const ContactList = () => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact());

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const filteredContacts = (contacts) => {
    if (filter === "") {
      return contacts;
    } else {
      const normalizedFilter = filter.toLowerCase();

      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  return (
    <ul>
      {filteredContacts(contacts).map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem contactItem={{ name, number, id }}></ContactItem>
          <button onClick={handleDelete}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: propTypes.array.isRequired,
//   onDeleteContact: propTypes.func.isRequired,
// };

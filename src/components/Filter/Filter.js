import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../redux/contactsSlice";
import style from "./Filter.module.css";

const Filter = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  const fandleFilterInpChange = (event) => {
    setFilter(event.currentTarget.value);
    console.log(filter);
  };

  dispatch(filterContacts(filter));

  return (
    <label className={style.filter_lable}>
      Find contact by name
      <input
        className={style.filter_input}
        type="text"
        value={filter}
        onChange={fandleFilterInpChange}
      />
    </label>
  );
};

// Filter.propTypes = {
//   filter: propTypes.string.isRequired,
//   change: propTypes.func.isRequired,
// };

export default Filter;

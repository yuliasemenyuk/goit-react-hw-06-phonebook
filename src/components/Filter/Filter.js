import { useState } from "react";
import { useDispatch } from "react-redux/lib/exports";
import style from "./Filter.module.css";
import propTypes from "prop-types";

const Filter = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  return (
    <label className={style.filter_lable}>
      Find contact by name
      <input
        className={style.filter_input}
        type="text"
        value={filter}
        // onChange={change}
      />
    </label>
  );
};

// Filter.propTypes = {
//   filter: propTypes.string.isRequired,
//   change: propTypes.func.isRequired,
// };

export default Filter;

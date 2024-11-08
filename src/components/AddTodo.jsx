import { useState } from "react";
import styles from "./AppName.module.css";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ onButtonClick }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onButtonClick(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            onChange={handleNameChange}
            value={todoName}
            required
            placeholder="Enter Todo Here"
            className={styles.input}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            required
            value={todoDate}
            onChange={handleDateChange}
            className={styles.input}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            onClick={handleAddButtonClicked}
            className="btn btn-success kg-btn"
          >
            <IoMdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

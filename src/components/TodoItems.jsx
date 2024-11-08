import { RiDeleteBin6Fill } from "react-icons/ri";

function TodoItems({ todoName, todoDate, onClickDelete }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6 item">{todoName}</div>
        <div className="col-4 item">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => onClickDelete(todoName)}
          >
            <RiDeleteBin6Fill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;

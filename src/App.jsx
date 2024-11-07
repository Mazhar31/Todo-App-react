import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleAddButton = (todoName, todoDate) => {
    if (todoName !== "" && todoDate !== "") {
      const newTodoItems = [
        ...todoItems,
        { name: todoName, dueDate: todoDate },
      ];
      setTodoItems(newTodoItems);
    }
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="container-container">
      <div className="container-items">
        <AppName />
        <AddTodo onButtonClick={handleAddButton} />

        {todoItems.length === 0 && <WelcomeMessage />}

        {todoItems.map((item) => (
          <TodoItems
            todoName={item.name}
            todoDate={item.dueDate}
            onClickDelete={handleDeleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

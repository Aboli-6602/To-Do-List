import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  let [items, setItems] = useState([]);
  // const items = ["A item"];

  function handleClick(item) {
    setItems((prevValue) => {
      return (items = [...prevValue, item]);
    });
    // setItem("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea addItem={handleClick} />
      <div>
        <ul>
          {items &&
            items.map(function (todoItem, index) {
              return (
                <ToDoItem
                  key={index}
                  id={index}
                  onChecked={deleteItem}
                  item={todoItem}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;

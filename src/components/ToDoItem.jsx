import React, { useState } from "react";

function ToDoItem(props) {
  // const [textStyle, setStyle] = useState("none");
  // style={{textDecoration: textStyle}}
  return (
    <li
      onClick={() => {
        // setStyle((textStyle === "none") ? "line-through" : "none");
        props.onChecked(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;

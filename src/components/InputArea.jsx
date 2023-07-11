import React, { useState } from "react";

function InputArea(props) {
  const [item, setItem] = useState("");
  return (
    <div className="form">
      <input
        value={item}
        type="text"
        onChange={(e) => {
          // props.getItem(e);
          setItem(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.addItem(item);
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

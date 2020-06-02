import React from "react";

const TodoItem = (props) => {
  const isChecked = props.checked ? "checked" : "";

  return (
    <li
      className={isChecked}
      onClick={props.toggleTodo}
    >
      {props.name}
    </li>
  );
}

export default TodoItem;
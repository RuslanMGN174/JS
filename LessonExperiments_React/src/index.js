"use strict";

import React from "react";
import ReactDOM from "react-dom";

// React-компонент (функциональный)
const HelloWorld = () => {
  return <h1>Hello world</h1>
}

// React-компонент (основанный на классе)
class TodoApp extends React.Component {
  constructor() {
    super();

    // Исходное состояние приложения
    this.state = {
      todos: [
        { name: "Настроить webpack", checked: true },
        { name: "Запустить webpack", checked: true },
        { name: "Написать TodoApp", checked: false }
      ]
    };
  }

  toggleTodo(key) {
    const todos = this.state.todos.map((todo, i) => {
      if (key === i) {
        return {
          name: todo.name,
          checked: !todo.checked
        }
      }

      else {
        return todo;
      }
    });

    this.setState({todos});

  }

  render() {
    return (
      <ol>
        {
          this.state.todos.map((todo, i) => {
            const isChecked = todo.checked ? "checked" : "";

            return (
              <li
                key={i}
                className={isChecked}
                onClick={ev => { this.toggleTodo(i) }}
              >
                {todo.name}
              </li>
            )
          })
        }
      </ol>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.querySelector("#app")
);


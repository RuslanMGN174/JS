"use strict";

import React from "react";
import ReactDOM from "react-dom";
import TodoItem from "./todo-item"

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
      ],
      newTodoText: ""
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

    // Обновляем состояние приложения
    this.setState({ todos });
  }

  addTodo() {
    const todos = this.state.todos;
    todos.push({
      name: this.state.newTodoText,
      checked: false
    });

    // Обновляем состояние приложения
    this.setState({
      todos,
      newTodoText: ""
    });

  }

  render() {
    return (
      <div>

        <h2>ToDo List</h2>

        <ol>
          {
            this.state.todos.map((todo, i) => {
              return (
                <TodoItem 
                key={i}
                name={todo.name}
                checked={todo.checked}
                toggleTodo={this.toggleTodo.bind(this, i)}
                />
              )
            })
          }
        </ol>

        <input
          type="text"
          placeholder="Навоя задача"
          value={this.state.newTodoText}
          onChange={ev => {
            this.setState({ newTodoText: ev.target.value })
          }}
          onKeyUp={ev => {
            if (ev.keyCode === 13) {
              this.addTodo();
            }
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.querySelector("#app")
);


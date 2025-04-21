import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to the Gym",
      desc: "make your body healthy and active",
      done: true,
    },
  ]);

  function addTodo() {
    const newArr = [];
    for (let i = 0; i < todos.length; i++) {
      newArr.push(todos[i]);
    }

    newArr.push({
      title: document.getElementById("title").value,
      desc: document.getElementById("desc").value,
      done: true,
    });
    <br />;

    setTodos(newArr);
  }

  function Todo(props) {
    return (
      <div>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <p>{props.done ? "Task Done" : "Task not Done"}</p>
      </div>
    );
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <input
          style={{ padding: "10px 15px", fontSize: "20px" }}
          id="title" type="text" placeholder="Enter the title"></input>
        <br />
        <br />
        <input
          style={{ padding: "10px 15px", fontSize: "20px" }}
          id="desc" type="text" placeholder="Enter the description"></input>
        <br />
        <br />
        <button style={{
          padding: "10px 20px", backgroundColor: "purple", fontWeight: "bolder"
        }} onClick={addTodo}>Add Todo </button>
        <br />
        <br />
        {todos.map((todo) => (
          <Todo title={todo.title} desc={todo.desc} done={todo.done} />
        ))}
      </div>
    </>
  );
}




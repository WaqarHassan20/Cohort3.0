import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() { setCount(count + 1) }
  function decreaseCount() {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  function resetCount() { setCount(0) }

  return (
    <>
      <div>
        <h1>Default Boiler Code</h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{count}</h1>
      <div className="card">
        <button style={{ padding: "10px 25px", margin: "15px" }} onClick={() => increaseCount()}>
          Increase
        </button>
        <button style={{ padding: "10px 25px", margin: "15px" }} onClick={() => decreaseCount()}>
          Decrease
        </button>
        <button style={{ padding: "10px 25px", margin: "15px" }} onClick={() => resetCount()}>
          Reset
        </button>
      </div >
    </>
  );
}

export default App;

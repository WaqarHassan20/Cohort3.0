import { useState } from "react";
import UsePrevHook from "./UsePrevHook";

function PrevValue() {
  const [count, setCount] = useState(0);
  const prevValue = UsePrevHook(count);
  // I gave the value to the custom hook UsePrevHook and the custom hook store the current value.After this, the state chagnes and it re-renders the component but our custom hook has useRef which resists the re-render. As a resutl, it keep storing the previous value which was sent to it and at the same time , the value of count has changed now but the custom hook still have the previous value we have sent to it.
  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    fontWeight: "bolder",
    padding: "15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "10px",
  };
  return (
    <>
      <div
        style={{
          height: "33vh",
          backgroundColor: "darkkhaki",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "darkslategray",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            fontWeight: "bolder",
            borderRadius: 20,
            display: "flex",
            color: "white",
            height: "30vh",
            width: "30vh",
          }}
        >
          <h1>Count : {count}</h1>
          <button style={buttonStyle} onClick={() => setCount((c) => c + 1)}>
            Increase
          </button>
          <h2>Previous value : {prevValue}</h2>
        </div>
      </div>
    </>
  );
}

export default PrevValue;

import { createContext } from "react";
import { useContext, useState } from "react";

const CounterContext = createContext();

function CounterProvider() {
  const [Counter, setCounter] = useState(0);

  return (
    <>
      <CounterContext.Provider
        value={{
          Counter: Counter,
          setCounter: setCounter,
        }}
      >
        <CounterValue />
      </CounterContext.Provider>
    </>
  );
}

function CounterUsingContext() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor: "darkgreen",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#F2EFE7",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 20,
            display: "flex",
            height: "30vh",
            width: "30vh",
          }}
        >
          <CounterProvider>
            <CounterValue />
          </CounterProvider>
        </div>
      </div>
    </>
  );
}

function CounterValue() {
  const { Counter } = useContext(CounterContext);
  return (
    <>
      <h1>Counter : {Counter}</h1>
      <div>
        <Increase />
        <Decrease />
      </div>
    </>
  );
}

const buttonStyle = {
  backgroundColor: "blue",
  color: "white",
  fontWeight: "bolder",
  padding: "15px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  margin: "10px",
};

function Increase() {
  const { setCounter } = useContext(CounterContext);

  function add() {
    setCounter((c) => c + 1);
  }

  return (
    <button style={buttonStyle} onClick={add}>
      Increase
    </button>
  );
}

function Decrease() {
  const { setCounter } = useContext(CounterContext);

  function minus() {
    setCounter((c) => c - 1);
  }

  return (
    <button style={buttonStyle} onClick={minus}>
      Decrease
    </button>
  );
}

export default CounterUsingContext;

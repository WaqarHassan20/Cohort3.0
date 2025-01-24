import UseCounterHook from "./CounterHook";

function Counter() {
  const { counter, increaseCounter, decreaseCounter } = UseCounterHook();

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
          height: "100vh",
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
          <h1>Counter : {counter}</h1>

          <div>
            <button style={buttonStyle} onClick={increaseCounter}>
              Increase
            </button>
            <button style={buttonStyle} onClick={decreaseCounter}>
              Decrease
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;

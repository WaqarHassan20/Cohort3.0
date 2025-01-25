import { memo, useState } from "react";

function MemoCounter() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        style={{
          height: "33vh",
          backgroundColor: "lightpink",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#C3FF93",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            fontWeight: "bolder",
            borderRadius: 20,
            display: "flex",
            color: "white",
            height: "25vh",
            width: "35vh",
          }}
        >
          <CurrentValue count={count} />
          <div>
            <IncreaseButton setCount={setCount} />
            <DecreaseButton setCount={setCount} />
          </div>
        </div>
      </div>
    </>
  );
}

const CurrentValue = memo(({ count }) => {
  return (
    <>
      <h1 style={{ color: "black" }}>Memo Counter: {count}</h1>
    </>
  );
});

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

const IncreaseButton = memo(function ({ setCount }) {
  return (
    <button
      onClick={() => {
        setCount((c) => c + 1);
      }}
      style={buttonStyle}
    >
      Increase
    </button>
  );
});

const DecreaseButton = memo(function ({ setCount }) {
  return (
    <button
      style={buttonStyle}
      onClick={() => {
        setCount((c) => c - 1);
      }}
    >
      Decrease
    </button>
  );
});

export default MemoCounter;

// memo hook let you skip the rerneder the component when its props are unchanged

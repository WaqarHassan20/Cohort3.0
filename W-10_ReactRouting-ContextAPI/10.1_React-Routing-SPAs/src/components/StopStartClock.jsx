import { useRef, useState } from "react";

function UseRefClock() {
  const [Counter, setCounter] = useState(0);

  //   let timer = 0;  now if use this approach to use the timer variable as global variable, App function will render every time when the state changes and function renders so as a result the value of clock will be reinitialize every time to zero. it will store the value for just one second and then again re-rendering will make it zero again. so we rarely uses the raw declaration of variables, almost none.

  const timer = useRef();

  function startCounter() {
    const clock = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);
    timer.current = clock;
  }

  function stopCounter() {
    clearInterval(timer.current);
  }

  const buttonStyle = {
    backgroundColor: "#EB5A3C",
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
          backgroundColor: "#B82132",
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
          <h2 style={{ textAlign: "center", color: "black",fontSize: 40, marginBottom: 30 }}>
            {Counter}
          </h2>

          <div>
            <button onClick={startCounter} style={buttonStyle}>
              Start
            </button>

            <button onClick={stopCounter} style={buttonStyle}>
              Stop
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseRefClock;

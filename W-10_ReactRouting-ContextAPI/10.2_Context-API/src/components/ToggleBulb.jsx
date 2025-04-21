import { useState } from "react";

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor: "darkolivegreen",
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
          <BulbState bulbOn={bulbOn} />
          <BulbToggle bulbOn={bulbOn} setBulbOn={setBulbOn} />
        </div>
      </div>
    </>
  );
}

function BulbState({ bulbOn }) {
  return (
    <>
      <h1>{bulbOn ? "Bulb On" : "Bulb Off"}</h1>
    </>
  );
}

function BulbToggle({ bulbOn, setBulbOn }) {
  function toggle() {
    setBulbOn(!bulbOn);
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

  return (
    <>
      <button style={buttonStyle} onClick={toggle}>
        Toggle State
      </button>
    </>
  );
}

export default LightBulb;

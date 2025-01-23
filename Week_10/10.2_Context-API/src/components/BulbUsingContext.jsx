import { createContext, useContext, useState } from "react";

const BulbContext = createContext();

function BulbProvider() {
  const [BulbOn, setBulbOn] = useState(true);

  return (
    <BulbContext.Provider
      value={{
        BulbOn: BulbOn,
        setBulbOn: setBulbOn,
      }}
    >
      <LightBulb />
    </BulbContext.Provider>
  );
}

function BulbUsingContext() {
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
          <BulbProvider>
            <LightBulb />
          </BulbProvider>
        </div>
      </div>
    </>
  );
}
export default BulbUsingContext;

function LightBulb() {
  return (
    <>
      <BulbState />
      <BulbToggle />
    </>
  );
}

function BulbState() {
  const { BulbOn } = useContext(BulbContext);
  return <h1>{BulbOn ? "Bulb On" : "Bulb Off"}</h1>;
}

function BulbToggle() {
  const { setBulbOn, BulbOn } = useContext(BulbContext);

  function Toggle() {
    setBulbOn(!BulbOn);
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
    <button style={buttonStyle} onClick={Toggle}>
      Toggle using Context
    </button>
  );
}

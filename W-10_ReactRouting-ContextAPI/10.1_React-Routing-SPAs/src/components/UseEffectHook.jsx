import { useRef } from "react";

function UseEffectHook() {
  const inputRef = useRef();

  function handleFocus() {
    inputRef.current.focus();
  }

  const inputStyle = {
    margin: "10px 0",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  };

  const buttonStyle = {
    backgroundColor: "#EB5A3C",
    color: "white",
    fontWeight: "bolder",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#3B6790",
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
        <h2 style={{ textAlign: "center", color: "black" }}>Sign Up</h2>

        <input
          ref={inputRef}
          type="text"
          placeholder="Enter the username"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Enter the Password"
          style={inputStyle}
        />

        <button onClick={handleFocus} style={buttonStyle}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
export default UseEffectHook;

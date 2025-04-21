import UseDebounceHook from "./UseDebounceHook";

export default function Debounce() {
  function sendBackendRequest() {
    alert("Request has been sent to Backend");
  }

  const deBounced = UseDebounceHook(sendBackendRequest);

  const inputStyle = {
    width: "30%",
    padding: "10px 15px",
    fontSize: "16px",
    border: "2px solid #ddd",
    borderRadius: "8px",
    outline: "none",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <>
      <div
        style={{
          height: "33vh",
          backgroundColor: "lightgreen",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input type="text" style={inputStyle} onChange={deBounced} />
      </div>
    </>
  );
}

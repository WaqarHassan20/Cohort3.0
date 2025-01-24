import { useState } from "react";
import UseFetchHook from "./UseFetchHook";

function Fetch() {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData } = UseFetchHook(
    "https://jsonplaceholder.typicode.com/posts/" + currentPost
  );

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
          backgroundColor: "lightslategray",
          display: "flex",
          paddingLeft: 30,
          paddingRight: 30,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: 30 }}>
          {finalData ? (
            <div style={{ color: "white" }}>
              <h1>{finalData.title}</h1>
              <p>{finalData.body}</p>
            </div>
          ) : (
            "Loading ...."
          )}
        </div>
        <div>
          <button
            style={buttonStyle}
            onClick={() => {
              setCurrentPost(1);
            }}
          >
            1
          </button>
          <button
            style={buttonStyle}
            onClick={() => {
              setCurrentPost(2);
            }}
          >
            2
          </button>
          <button
            style={buttonStyle}
            onClick={() => {
              setCurrentPost(3);
            }}
          >
            3
          </button>
        </div>
      </div>
    </>
  );
}

export default Fetch;

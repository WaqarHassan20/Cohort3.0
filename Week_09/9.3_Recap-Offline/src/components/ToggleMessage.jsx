import { useState } from "react"

function ToggleMessage() {

  const [visible, setVisible] = useState(true)

  function ToggleFun() {
    setVisible((v) => !v)
  }

  return <div>
    <div style={{ backgroundColor: "lightgoldenrodyellow", height: "98vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "30%", height: "20%" }}>
        <button
          style={{
            paddingLeft: 20, paddingRight: 20, backgroundColor: "green", borderRadius: 10, color: "white", fontWeight: "bolder", cursor: "pointer"
          }}
          onClick={ToggleFun} >
          <h2>Toggle Text</h2>
        </button>
        {visible && <h1>This message is Rendering conditionally !</h1>}
      </div>
    </div >
  </div >

}

export default ToggleMessage
import { useSetRecoilState, useRecoilValue, RecoilRoot } from "recoil";
import { counterAtom, evenSelector } from "../../store/atom/atom";

function RecoilSelector() {
  return (
    <>
      <RecoilRoot>
        <div
          style={{
            height: "33vh",
            backgroundColor: "darkorchid",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CurrentValue />
          <IsEven />
          <Button />
        </div>
      </RecoilRoot>
    </>
  );
}

function CurrentValue() {
  const count = useRecoilValue(counterAtom);

  return (
    <>
      <h1 style={{ color: "white" }}>Selector Counter : {count}</h1>
    </>
  );
}

function IsEven() {
  const even = useRecoilValue(evenSelector);

  return (
    <>
      {even ? (
        <h1 style={{ color: "white" }}>isEven</h1>
      ) : (
        <h1 style={{ color: "white" }}>isOdd</h1>
      )}
    </>
  );
}

function Button() {
  const buttonStyle = {
    backgroundColor: "grey",
    color: "white",
    fontWeight: "bolder",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "5px",
  };

  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount((c) => c + 2);
  }

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <>
      <button style={buttonStyle} onClick={increase}>
        Increase
      </button>
      <button style={buttonStyle} onClick={decrease}>
        Decrease
      </button>
    </>
  );
}

export default RecoilSelector;

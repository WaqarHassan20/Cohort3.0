import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "../../store/atom/atom";

function RecoilCounter() {
  return (
    <>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </>
  );
}

function Counter() {
  return (
    <>
      <div
        style={{
          height: "33vh",
          backgroundColor: "lightseagreen",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CurrentValue />
        <IncreaseButton />
        <DecreaseButton />
      </div>
    </>
  );
}

function CurrentValue() {
  const count = useRecoilValue(counterAtom);

  return (
    <>
      <h1>Recoil Counter : {count}</h1>
    </>
  );
}

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

function IncreaseButton() {
  const setCount = useSetRecoilState(counterAtom);

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
}

function DecreaseButton() {
  const setCount = useSetRecoilState(counterAtom);

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
}

export default RecoilCounter;

import { useState } from "react";

function UseCounterHook() {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter((count) => count + 1);
  }

  function decreaseCounter() {
    setCounter((count) => count - 1);
  }

  return {
    counter: counter,
    increaseCounter: increaseCounter,
    decreaseCounter: decreaseCounter,
  };
}

export default UseCounterHook;

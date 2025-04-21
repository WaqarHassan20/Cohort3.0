import { useRef } from "react";

export default function UseDebounceHook(originalFunction) {
  const currentClock = useRef();

  function func() {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalFunction, 200);
  }

  return func;
}

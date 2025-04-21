import { useEffect, useRef } from "react";

// step 1 - let the value 1 is passed here
export default function UsePrevHook(value) {
  const ref = useRef("Null"); // step 2 - this line stores the current value that will be 1

  useEffect(() => {
    //  step 4 - now the effects are called and the value will be updated from 1 to 2
    ref.current = value;
  }, [value]);

  return ref.current; //  step 3 - here it first returns the current value which was 1
}

// The important concept of React is that it returns the value first and then called the effects later on

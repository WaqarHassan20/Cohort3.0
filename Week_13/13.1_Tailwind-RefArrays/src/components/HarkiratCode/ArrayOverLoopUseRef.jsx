import { useEffect, useRef, useState } from "react";

function NoLoopUseRefInterview({ num }) {
  const refs = useRef([]);
  useEffect(() => {
    refs.current = refs.current.slice(0, num);
  }, [num]);

  return (
    <div className="flex gap-2 justify-center pt-64 bg-[#002b5b] h-screen">
      {Array.from({ length: num }).map((_, index) => {
        return (
          <OtpBox
            reference={(e) => {
              refs.current[index] = e;
            }}
            key={index}
            onDone={() => {
              if (index + 1 >= num) return;
              refs.current[index + 1].focus();
            }}
            goBack={(clear) => {
              if (index > 0) {
                if (clear) {
                  refs.current[index].value = "";
                }
                refs.current[index - 1].focus();
              }
            }}
          />
        );
      })}
    </div>
  );
}

export default NoLoopUseRefInterview;

function OtpBox({ reference, onDone, goBack }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      type="text"
      className="text-white m-2 w-[40px] h-[50px] bg-blue-900 outline-none w-12 h-12 border-2 rounded-md text-center font-bold"
      ref={reference}
      value={inputValue}
      maxLength={1}
      onKeyUp={(e) => {
        if (e.key === "Backspace") {
          setInputValue("");
          goBack(true);
        }
      }}
      onChange={(e) => {
        const val = e.target.value;

        if (
          val === "1" ||
          val === "2" ||
          val === "3" ||
          val === "4" ||
          val === "5" ||
          val === "6" ||
          val === "7" ||
          val === "8" ||
          val === "9"
        ) {
          setInputValue(val);
          onDone();
        }
      }}
    />
  );
}

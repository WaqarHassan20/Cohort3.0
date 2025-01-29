import { createContext, useContext, useEffect, useRef, useState } from "react";

const OtpContext = createContext();

function NoLoopUseRefInterview({ num }) {
  const refs = useRef([]);

  useEffect(() => {
    refs.current = refs.current.slice(0, num);
  }, [num]);

  const contextValue = {
    refs,
    num,
  };

  return (
    <OtpContext.Provider value={contextValue}>
      <div className="flex gap-2 justify-center pt-64 bg-[#002b5b] h-screen">
        {Array.from({ length: num }).map((_, index) => (
          <OtpBox key={index} index={index} />
        ))}
      </div>
    </OtpContext.Provider>
  );
}

export default NoLoopUseRefInterview;

function OtpBox({ index }) {
  const [inputValue, setInputValue] = useState("");
  const { refs, num } = useContext(OtpContext);

  const handleDone = () => {
    if (index + 1 >= num) return;
    refs.current[index + 1].focus();
  };

  const handleGoBack = (clear) => {
    if (index > 0) {
      if (clear) {
        refs.current[index].value = "";
      }
      refs.current[index - 1].focus();
    }
  };

  return (
    <input
      type="text"
      className="text-white m-2 w-[40px] h-[50px] bg-blue-900 outline-none border-2 rounded-md text-center font-bold"
      ref={(e) => {
        refs.current[index] = e;
      }}
      value={inputValue}
      maxLength={1}
      onKeyUp={(e) => {
        if (e.key === "Backspace") {
          setInputValue("");
          handleGoBack(true);
        }
      }}
      onChange={(e) => {
        const val = e.target.value;
        if (/^[0-9]$/.test(val)) {
          setInputValue(val);
          handleDone();
        }
      }}
    />
  );
}

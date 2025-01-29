import { useState, useRef } from "react";

function OTP({ number }) {
  const ref = useRef(Array(number).fill(0));

  return (
    <>
      {Array(number)
        .fill(0)
        .map((index) => {
          <SubOTPBox
            refrence={(e) => (ref.current[index] = e)}
            onDone={() => {
              if (index + 1 >= number) {
                return;
              }
              ref.current[index + 1].focus();
            }}
            goBack={() => {
              if (number == 0) {
                return;
              }
              ref.current[index - 1].focus();
            }}
          />;
        })}
    </>
  );
}

export default OTP;

function SubOTPBox({ refrence, onDone, goBack }) {
  const [inpuValue, setInputValue] = useState("");

  return (
    <>
      <input
        ref={refrence}
        onKeyUp={(e) => {
          if (e.key == "Backspace") {
            goBack();
          }
        }}
        value={inpuValue}
        onChange={(e) => {
          const val = e.target.value;
          setInputValue(val);
          onDone();
        }}
        type="text"
        className=" font-bold px-4 text-white rounded-2xl m-2 w-[40px] h-[50px] bg-blue-900 outline-none"
      ></input>
    </>
  );
}

// export default SubOTPBox;

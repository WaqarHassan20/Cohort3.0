import { useState } from "react";

function Button({ buttonValue, input, placeholder }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div
        className={`px-32 py-2 mt-4 text-white cursor-pointer  flex flex-col  gap-12`}
      >
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type={input}
          placeholder={placeholder}
          className="bg-blue-500 outline-none py-4 rounded-xl w-96 px-4 "
        />
        <button
          className={`px-4 py-3 rounded-xl ${
            inputValue.trim() === "" ? "bg-[#8094ad]" : "bg-[#16C47F]"
          } w-96`}
          disabled={inputValue.trim() === ""}
        >
          {buttonValue}
        </button>
      </div>
    </>
  );
}

export default Button;

// this approach is much better as it is making the button fully generic to change according to the input given by user
// e.g input type , placeholder value, and we can make it so on further

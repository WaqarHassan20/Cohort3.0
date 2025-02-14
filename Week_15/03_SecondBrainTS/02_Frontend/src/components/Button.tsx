import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  startIcon: ReactElement;
  text: string;
}

const variantClass = {
  primary: "bg-blue-600 text-white",
  secondary: "bg-[#d9ddee] text-[#7164c0]",
};

const defaultStyles = "rounded-md font-semibold px-5 py-3 m-10 flex items-center";

export function Button({ variant, text, startIcon }: ButtonProps) {
  return (
    <>
      <button className={`${variantClass[variant]} ${defaultStyles}`}>
        <div className="pr-3">{startIcon}</div>
        {text}
      </button>
    </>
  );
}

// gray:{
//   100 : #eeeeef,
//   200 : #9492db,
//   600 : #95989c
// }
// purple:{
//   200 : #d9ddee,
//   500 : #9492db,
//   600 : #7164c0
// }

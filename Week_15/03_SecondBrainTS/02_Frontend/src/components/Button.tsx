import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  startIcon: ReactElement;
  text: string;
}

const variantClass = {
  primary: "bg-[#7164c0] text-white",
  secondary: "bg-[#d9ddee] text-[#7164c0]",
};

const defaultStyles = "rounded-md font-medium px-4 py-2 flex items-center gap-3";

export function Button({ variant, text, startIcon }: ButtonProps) {
  return (
    <>
      <button className={`${variantClass[variant]} ${defaultStyles}`}>
        {startIcon}
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

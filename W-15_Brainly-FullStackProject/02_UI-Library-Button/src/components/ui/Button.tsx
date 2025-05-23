import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const varinatStyles = {
  primary: "bg-green-600 text-white  hover:bg-blue-600",
  secondary: "bg-[#e0e7fe]  hover:bg-blue-600 hover:text-white",
};

const buttonSize = {
  sm: "px-2 py-1.5 text-sm",
  md: "px-3 py-1.5 text-base",
  lg: "px-6 py-2 text-lg",
};

const defaultStyles = "rounded-sm font-bold m-1 flex items-center gap-1";

export const Button = (props: ButtonProps) => {
  return (
    <>
      <button
        className={`${defaultStyles} ${varinatStyles[props.variant]} ${
          buttonSize[props.size]
        }`}
      >
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
        {props.text}
        {props.endIcon}
      </button>
    </>
  );
};

// e0e7fe 300
// 3e38a7 500
// 5046e4 600

import { ForwardedRef } from "react";

interface InputProps {
  placeholder: string;
  ref?: ForwardedRef<HTMLInputElement>;
}

export function Input({ placeholder, ref }: InputProps) {
  return (
    <>
      <div className="p-3">
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className="px-4 py-2 border rounded-md"
        />
      </div>
    </>
  );
}

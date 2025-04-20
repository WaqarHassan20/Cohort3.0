"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Signup() {
  const router = useRouter();
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSignup = async () => {
    const username = nameRef.current?.value;
    const password = passwordRef.current?.value;
    axios.post("http://localhost:3000/api/v1/signup", {
      username,
      password,
    });

    router.push("/signin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f1f1f] via-[#2a2a2a] to-[#0f0f0f] flex items-center justify-center">
      <div className="w-full max-w-lg bg-[#2a2a2a] p-8 rounded-3xl shadow-xl space-y-8">
        <h2 className="text-4xl font-extrabold text-center text-white">
          Sign Up
        </h2>
        <div className="space-y-6">
          <LabelledInput
            label="Username"
            placeholder="hello123@gmail.com"
            inputRef={nameRef}
          />
          <LabelledInput
            label="Password"
            type="password"
            placeholder="123456"
            inputRef={passwordRef}
          />

          <div>
            <button
              onClick={handleSignup}
              type="button"
              className="w-full py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white font-medium rounded-lg text-lg transition-all duration-300 hover:scale-105"
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-center">
            <a
              href="#"
              className="text-sm text-purple-500 hover:text-purple-400"
            >
              Already have an account? Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

function LabelledInput({
  label,
  placeholder,
  type,
  inputRef,
}: LabelledInputType) {
  return (
    <div>
      <label className="block text-sm text-white font-semibold">{label}</label>
      <input
        ref={inputRef}
        type={type || "text"}
        className="mt-2 w-full p-4 rounded-lg bg-[#1f1f1f] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
        placeholder={placeholder}
      />
    </div>
  );
}

"use client";
import Link from "next/link";

export function AuthPage({ isSignin }: { isSignin: boolean }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border border-gray-200 rounded-xl p-8 w-full max-w-md text-gray-800 shadow-2xl">
        <h2 className="text-3xl font-semibold text-center mb-6 text-black">
          {isSignin ? 'Sign In' : 'Sign Up'}
        </h2>

        {!isSignin && (
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blacktext-black text-sm"
          />
        )}

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blacktext-black text-sm"
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blacktext-black text-sm"
        />

        <div className="mb-4 flex justify-center">
          <button
            type="submit"
            className="w-3/4 py-3 bg-black  hover:bg-black text-white font-bold rounded-lg transition duration-200"
          >
            {isSignin ? 'Sign In' : 'Sign Up'}
          </button>
        </div>

        <div className="text-center text-sm">
          <Link
            href={isSignin ? '/signup' : '/signin'}
            className="text-blue-600 font-bold hover:underline"
          >
            {isSignin
              ? "Don't have an account? Sign Up"
              : 'Already have an account? Sign In'}
          </Link>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 bg-opacity-25">
      {/* Background crystal pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
        </div>
      </div>

      {/* Glass card */}
      <div className="relative bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl border border-white border-opacity-50 w-full max-w-md overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100"></div>
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white bg-opacity-30 border border-white border-opacity-50"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white bg-opacity-20 border border-white border-opacity-30"></div>

        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-light text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-500 font-light">Sign in to your account</p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all bg-white bg-opacity-50 placeholder-gray-400"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all bg-white bg-opacity-50 placeholder-gray-400"
                placeholder="••••••••"
              />
            </div>


            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border mt-10 border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition-all"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white bg-opacity-70 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white bg-opacity-70 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-100 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.784-1.667-4.146-2.668-6.735-2.668-5.523 0-10 4.477-10 10s4.477 10 10 10c8.396 0 10-7.524 10-10 0-0.167-0.007-0.334-0.020-0.5h-9.98z" />
                </svg>
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white bg-opacity-70 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-100 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="px-8 py-4 bg-white bg-opacity-30 border-t border-white border-opacity-50 text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account?{' '}
            <a href="/signup" className="font-medium text-blue-500 hover:text-blue-600">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
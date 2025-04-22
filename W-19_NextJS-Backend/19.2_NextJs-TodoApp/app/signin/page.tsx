
export default function Signin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f1f1f] via-[#2a2a2a] to-[#0f0f0f] flex items-center justify-center">
      <div className="w-full max-w-lg bg-[#2a2a2a] p-8 rounded-3xl shadow-xl space-y-8">
        <h2 className="text-4xl font-extrabold text-center text-white">
          Sign In
        </h2>
        <div className="space-y-6">
          <LabelledInput label="Username" placeholder="hello123@gmail.com" />
          <LabelledInput
            label="Password"
            type="password"
            placeholder="123456"
          />
          <div>
            <button
              type="button"
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg text-lg transition-all duration-300 hover:scale-105"
            >
              Sign In
            </button>
          </div>
          <div className="flex justify-center">
            <a
              href="#"
              className="text-sm text-purple-500 hover:text-purple-400"
            >
              Forgot Password?
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
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
  return (
    <div>
      <label className="block text-sm text-white font-semibold">{label}</label>
      <input
        type={type || "text"}
        className="mt-2 w-full p-4 rounded-lg bg-[#1f1f1f] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
        placeholder={placeholder}
      />
    </div>
  );
}

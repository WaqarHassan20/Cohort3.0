export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="backdrop-blur-lg bg-white/5 shadow-2xl border border-white/10 rounded-2xl p-10 max-w-md text-center transition-all duration-300 hover:scale-105">
        <h1 className="text-3xl font-bold text-white mb-4 drop-shadow-md">
          Hello there 👋
        </h1>
        <p className="text-lg text-gray-300">
          This is my very first project in <span className="font-semibold text-white">Next.js</span>
        </p>
      </div>
    </div>
  );
}

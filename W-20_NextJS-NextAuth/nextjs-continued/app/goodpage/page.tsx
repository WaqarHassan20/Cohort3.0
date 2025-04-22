export default function Home() {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white p-6">
        <div className="max-w-xl w-full text-center p-8 border border-[#0ff] rounded-2xl transition-all duration-300">
          <h1 className="text-4xl font-bold text-[#0ff] mb-4">⚡ Neon UI Page</h1>
          <p className="text-white/80 text-lg">
            This is a static page rendered by Next.js with glowing neon vibes. Powered by Tailwind CSS.
          </p>
        </div>
      </main>
    );
  }
  
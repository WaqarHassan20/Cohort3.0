export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <div className="relative p-6 rounded-2xl bg-black border border-[#0ff] shadow-[0_0_20px_#0ff] transition max-w-md w-full">
        <h2 className="text-2xl font-bold text-[#0ff] mb-2">Neon Card</h2>
        <p className="text-white/80">
        Hello there !
        </p>
        <p className="text-white/80">
          This is a glowing neon-style card built with Tailwind CSS and Next.js.
        </p>
      </div>
    </div>
  );
}

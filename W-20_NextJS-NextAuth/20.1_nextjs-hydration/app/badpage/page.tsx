import Counter from "../components/Counter";

export default function Home() {

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6 text-white">
      <div className="p-8 rounded-2xl border border-[#0ff] shadow-[0_0_20px_#0ff] transition-all duration-300 max-w-sm w-full text-center">
        <h1 className="text-3xl font-bold text-[#0ff] mb-4">⚡ Neon Counter</h1>
       <Counter/>
      </div>
    </main>
  );
}

// Server components are server side rendered 
// Client components are server side rendered and client side hydrated
// means they got injected the JS in Html static page which is returned from server.
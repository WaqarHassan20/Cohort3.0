import Link from "next/link";

export default function Home() {
  // // Other apporach for routing the pages but give a lot of errors //
  // import { useRouter } from "next/router";
  // export default function DemoFunction() {
  //   const router = useRouter();
  //   return <button onClick={() => router.push("/signup")}>Sign Up</button>;
  //   return <button onClick={() => router.push("/signin")}>Sign In</button>;
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-4">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-cyan-400 drop-shadow-lg mb-6">
          ⚡ Todo Application
        </h1>
        <div className="flex justify-center gap-6">
          <Link
            href="/signup"
            className="px-4 py-2 rounded-lg text-white bg-cyan-600 hover:bg-cyan-500 transition-all duration-200 shadow-md hover:shadow-cyan-500/50"
          >
            Sign Up
          </Link>
          <Link
            href="/signin"
            className="px-4 py-2 rounded-lg text-white bg-pink-600 hover:bg-pink-500 transition-all duration-200 shadow-md hover:shadow-pink-500/50"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

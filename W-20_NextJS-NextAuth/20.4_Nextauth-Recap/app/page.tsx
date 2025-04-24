// "use client";

// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

// export default function Home() {
//   return (
//     <div className="bg-black text-white min-h-screen flex items-center justify-center p-6 sm:p-20">
//       <main className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 sm:p-16 shadow-[0_0_30px_#00f0ff55]">
//         <SessionProvider>
//           <AuthCheck />
//         </SessionProvider>
//       </main>
//     </div>
//   );
// }

// function AuthCheck() {
//   const session = useSession();

//   return (
    // <div className="flex flex-col gap-6 items-center">
    //   {session.status === "authenticated" && (
    //     <button
    //       onClick={() => signOut()}
    //       className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold shadow-[0_0_15px_#ff00ff80] hover:scale-105 transition-all duration-300"
    //     >
    //       Log Out
    //     </button>
    //   )}

    //   {session.status === "unauthenticated" && (
    //     <button
    //       onClick={() => signIn()}
    //       className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_15px_#00ffff80] hover:scale-105 transition-all duration-300"
    //     >
    //       Sign In
    //     </button>
    //   )}
    // </div>
//   );
// }

// ============================================================ //
// ==================  Appraoch Number 2 ====================== //
// ============================================================ //

import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return <div>
    {JSON.stringify(session)}
  </div>
}
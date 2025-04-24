"use client";

import { useSession, SessionProvider, signOut, signIn } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <AuthCheck />
    </SessionProvider>
  );
}

function AuthCheck() {
  const { status } = useSession();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {status === "authenticated" && (
          <button className="bg-red-600 rounded-xl px-6 py-3" onClick={() => signOut()}>Log Out</button>
        )}

        {status !== "authenticated" && (
          <button className="bg-green-600 rounded-xl px-6 py-3" onClick={() => signIn()}>Sign In</button>
        )}
      </main>
    </div>
  );
}

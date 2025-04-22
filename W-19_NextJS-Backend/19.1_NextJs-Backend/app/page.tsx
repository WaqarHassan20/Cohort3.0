import axios from "axios";

async function getUserDetails() {
  // const response = await axios.get(
    // "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  // );

  const response = await axios.get("http://localhost:3000/api/v1/user/details");

  await new Promise((r) => setTimeout(r, 2000));

  return response.data;
}

export default async function Home() {
  const userData = await getUserDetails();
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm border border-purple-600/20 rounded-2xl shadow-[0_0_30px_#6e44ff55] p-10 w-full max-w-md transition-transform hover:scale-[1.03] duration-300">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          ✨ User Profile
        </h1>

        <div className="space-y-4 text-base">
          <div className="flex items-center justify-between">
            <span className="text-pink-300 font-medium">👤 Name:</span>
            <span className="text-white/90">{userData?.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-cyan-300 font-medium">📧 Email:</span>
            <span className="text-white/90">{userData?.email}</span>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-400 text-center">
          Made with 💜 using Next.js + Tailwind
        </div>
      </div>
    </div>
  );
}

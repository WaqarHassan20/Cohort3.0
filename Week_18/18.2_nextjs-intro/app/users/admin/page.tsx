import { ShieldCheck } from "lucide-react"; // For cool role icon (optional)

export default function AdminPage() {
  const admins = [
    {
      name: "Ali Abbas Chadhar",
      role: "Admin",
      bio: "System overseer and lead engineer",
    },
    {
      name: "Waqar Ul Hassan",
      role: "Admin",
      bio: "Handles operations and tech strategy",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-purple-500 tracking-widest">
        Admin Panel
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {admins.map((admin, index) => (
          <div
            key={index}
            className="backdrop-blur-xl bg-white/5 border border-purple-800/30 rounded-2xl p-6 w-full max-w-sm shadow-xl hover:shadow-purple-800/50 transition-all duration-300"
          >
            {/* Avatar Circle */}
            <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-3xl font-bold mb-4">
              {admin.name.charAt(0)}
            </div>

            {/* Name + Badge */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold">{admin.name}</h2>
              <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-purple-700/20 text-purple-300 text-xs rounded-full">
                <ShieldCheck size={16} /> {admin.role}
              </div>
            </div>

            {/* Bio */}
            <p className="mt-4 text-sm text-gray-400 text-center">
              {admin.bio}
            </p>

            {/* Button */}
            <div className="mt-6 flex justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 transition px-5 py-2 rounded-full text-sm font-medium">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// export default function AdminPage() {
//   const admins = [
//     { name: "Ali Raza", role: "Admin", bio: "System overseer and lead engineer" },
//     { name: "Nimra Asif", role: "Admin", bio: "Handles operations and tech strategy" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-black text-white p-8">
//       <h1 className="text-4xl font-bold text-center mb-12 text-purple-500 tracking-widest">
//         Admin Panel
//       </h1>

//       <div className="flex flex-col md:flex-row justify-center items-center gap-8">
//         {admins.map((admin, index) => (
//           <div
//             key={index}
//             className="backdrop-blur-xl bg-white/5 border border-purple-800/30 rounded-2xl p-6 w-full max-w-sm shadow-xl hover:shadow-purple-800/50 transition-all duration-300"
//           >
//             {/* Avatar Circle */}
//             <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-3xl font-bold mb-4">
//               {admin.name.charAt(0)}
//             </div>

//             {/* Name + Role Badge */}
//             <div className="text-center">
//               <h2 className="text-2xl font-semibold">{admin.name}</h2>
//               <div className="mt-2 inline-block px-3 py-1 bg-purple-700/20 text-purple-300 text-xs rounded-full">
//                 {admin.role}
//               </div>
//             </div>

//             {/* Bio */}
//             <p className="mt-4 text-sm text-gray-400 text-center">{admin.bio}</p>

//             {/* Button */}
//             <div className="mt-6 flex justify-center">
//               <button className="bg-purple-600 hover:bg-purple-700 transition px-5 py-2 rounded-full text-sm font-medium">
//                 View Profile
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

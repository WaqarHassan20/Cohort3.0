// pages/users.tsx
export default function UsersPage() {
  const users = [
    { name: "Ali Raza", role: "Admin" },
    { name: "Sara Malik", role: "User" },   
    { name: "Nimra Asif", role: "Admin" },
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-gradient-to-r from-[#ff007b] to-[#fbc2eb]";
      case "User":
        return "bg-gradient-to-r from-[#4e81f5] to-[#9fbbff]";
      case "Moderator":
        return "bg-gradient-to-r from-[#00b894] to-[#55efc4]";
      default:
        return "bg-gradient-to-r from-[#2d3436] to-[#636e72]";
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#fc00ff] via-[#00dbde] to-[#00ffcc]">
        Users / Memebers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-gray-900 border-2 border-blue-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105"
          >
            {/* Avatar */}
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#fc00ff] to-[#00dbde] p-1">
                <div className="w-full h-full bg-[#1d1f21] rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  {user.name.charAt(0)}
                </div>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <span
                  className={`inline-block mt-1 px-3 py-1 text-xs rounded-full text-white ${getRoleColor(user.role)}`}
                >
                  {user.role}
                </span>
              </div>
            </div>

            {/* Bio / Description */}
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Passionate about tech and design. Always experimenting with new ideas.
            </p>

            {/* Actions */}
            <div className="mt-6 flex justify-between">
              <button className="px-4 py-2 text-sm bg-gradient-to-r from-[#ff007b] to-[#fbc2eb] rounded-full hover:bg-gradient-to-l transition">
                View Profile
              </button>
              <button className="px-4 py-2 text-sm bg-gradient-to-r from-[#4e81f5] to-[#9fbbff] rounded-full hover:bg-gradient-to-l transition">
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

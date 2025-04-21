export default function UsersPage() {
  const users = [
    { name: "Ali Raza", role: "Admin" },
    { name: "Zara Khan", role: "User" },
    { name: "Hamza Noor", role: "Moderator" },
    { name: "Sara Malik", role: "User" },
    { name: "Bilal Ahmed", role: "Admin" },
    { name: "Areeba Siddiqui", role: "User" },
    { name: "Usman Tariq", role: "Moderator" },
    { name: "Iqra Yousaf", role: "User" },
    { name: "Nimra Asif", role: "Admin" },
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-purple-600";
      case "User":
        return "bg-blue-500";
      case "Moderator":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-400 tracking-wider">
        Team Members / Users
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] rounded-2xl p-6 shadow-lg hover:shadow-purple-700/50 transition duration-300 hover:scale-[1.02]"
          >
            {/* Avatar */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 p-1">
                  <div className="w-full h-full bg-[#1e1e1e] rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {user.name.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <span
                  className={`inline-block mt-1 px-3 py-1 text-xs rounded-full text-white ${getRoleColor(
                    user.role
                  )}`}
                >
                  {user.role}
                </span>
              </div>
            </div>

            {/* Bio / Description */}
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Passionate about building cool stuff. Loves coffee and clean code.
            </p>

            {/* Actions */}
            <div className="mt-4 flex gap-2">
              <button className="px-4 py-1 text-sm bg-purple-600 rounded-full hover:bg-purple-700 transition">
                View
              </button>
              <button className="px-4 py-1 text-sm bg-zinc-700 rounded-full hover:bg-zinc-600 transition">
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

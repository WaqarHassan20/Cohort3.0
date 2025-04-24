export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
          <div className="flex">
            <Sidebar />
            <div className="flex-1 min-h-screen">
              <TopNavbar />
              <main className="p-6">{children}</main>
            </div>
          </div>
        </body>
      </html>
    );
  }
  
  // Sidebar Component
  function Sidebar() {
    return (
      <aside className="w-64 bg-white/5 backdrop-blur-md shadow-lg h-screen p-6 border-r border-white/10 sticky top-0 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">📊 Dashboard</h2>
        <ul className="space-y-4 text-gray-300">
          <li className="hover:text-white transition">🏠 Overview</li>
          <li className="hover:text-white transition">📁 Projects</li>
          <li className="hover:text-white transition">🧑‍💼 Team</li>
          <li className="hover:text-white transition">⚙️ Settings</li>
        </ul>
      </aside>
    );
  }
  
  // Top Navbar Component
  function TopNavbar() {
    return (
      <header className="w-full px-6 py-4 bg-white/5 backdrop-blur-md shadow-md border-b border-white/10 sticky top-0 z-40">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wider">Welcome Back!</h1>
          <div className="flex items-center space-x-4">
            <button className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition">
              Notifications
            </button>
            <div className="w-8 h-8 bg-gray-500 rounded-full" />
          </div>
        </div>
      </header>
    );
  }
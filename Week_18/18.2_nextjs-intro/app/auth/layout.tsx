export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-white/5 backdrop-blur-md shadow-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-white tracking-widest">
          🚀 MyProject
        </h1>
        <ul className="flex space-x-6 text-gray-300 font-medium">
          <li className="hover:text-white transition">Home</li>
          <li className="hover:text-white transition">About</li>
          <li className="hover:text-white transition">Projects</li>
          <li className="hover:text-white transition">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default function BlogPage({ params }: any) {
    const blogId = params.blogId;
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1a1a1a] flex justify-center items-center text-white px-4">
        <div className="w-full max-w-3xl p-10 rounded-3xl backdrop-blur-lg bg-gradient-to-br from-[#1e1e1e]/80 to-[#292929]/80 shadow-[0_0_40px_#8b5cf655] border border-fuchsia-600/30 transition-all duration-500">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-500">
            Blog Post
          </h1>
          <p className="text-3xl text-center text-cyan-300 font-semibold">
            Dynamic Param:
            <span className="text-yellow-400 ml-2">{JSON.stringify(blogId)}</span> 
            {/* // This catches the array of params user give in the route URL : 3/4/5/7/8 */}
          </p>
        </div>
      </div>
    );
  }
  
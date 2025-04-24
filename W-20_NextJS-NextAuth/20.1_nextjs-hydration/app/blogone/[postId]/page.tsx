import axios from "axios";

export default async function BlogPage({ params }: any) {
  const postId = await params.postId;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] flex justify-center items-center text-white px-4">
      <div className="w-full max-w-4xl p-10 rounded-3xl backdrop-blur-lg bg-gradient-to-br from-[#1f1f1f]/80 to-[#2c2c2c]/80 shadow-[0_0_30px_#9333ea55] border border-purple-600/20 transition-transform duration-500">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500">
          Blog Post Details
        </h1>
        <div className="space-y-6">
          <div className="text-xl sm:text-2xl text-cyan-300 font-semibold">
            Post ID: <span className="text-yellow-400">{postId}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{data.title}</h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">{data.body}</p>
        </div>
      </div>
    </div>
  );
}

// [id]           → dynamic route (single segment)
//                 e.g. /blog/123 → params.id = '123'

// [...slug]      → catch-all route (multiple segments as array)
//                 e.g. /docs/a/b → params.slug = ['a', 'b']

// [[...catchAll]] → optional catch-all route as well as main route e.g /blog/123 here main route is /blog.
// This will also render the /blog page if no params are passed while above two will not do this.
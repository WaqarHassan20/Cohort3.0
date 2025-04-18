import axios from "axios";

async function getBlogs() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  return response.data;
}
export default async function Blogs() {
  const blogs = await getBlogs();

  return (
    <>
      <div className="rounded-lg p-4 bg-gradient-to-br from-[#1f1c2c] via-[#2c2b3c] to-[#1a1a2e] backdrop-blur-md text-white shadow border border-white/10 w-full max-w-2xl mx-auto">
        <div className="text-5xl font-semibold text-center text-white py-4">
          Todos
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
        {blogs.map((blog: ITodo, index: number) => {
          return (
            <Todo
              key={index}
              id={index}
              title={blog.title}
              completed={blog.completed}
            />
          );
        })}
      </div>
    </>
  );
}

interface ITodo {
  title: string;
  completed: boolean;
  id: number;
}

function Todo({ title, completed, id }: ITodo) {
  return (
    <div className="rounded-lg p-4 bg-gradient-to-br from-[#1f1c2c] via-[#2c2b3c] to-[#1a1a2e] backdrop-blur-md text-white shadow border border-white/10 w-full max-w-full mx-auto">
      <h2 className="text-2xl font-medium mb-4 text-indigo-400">
        {id + 1}. {title}
      </h2>
      <div
        className={`inline-block px-3 py-1 text-xs rounded-md font-medium ${
          completed
            ? "bg-white/10 text-green-300 border border-green-500/30"
            : "bg-white/10 text-rose-300 border border-rose-400/30"
        }`}
      >
        {completed ? "✔ Done" : "⏳ Pending"}
      </div>
    </div>
  );
}

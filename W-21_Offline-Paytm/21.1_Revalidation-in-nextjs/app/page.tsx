import revalidate from "./lib/actions/action1";

interface todoType {
  id : string,
  title: string,
  description: string,
}

export default async function Home() {

  const response = await fetch('https://sum-server.100xdevs.com/todos', {
    next:{tags:["todos"]},
  });  
  const data = await response.json();
  revalidate();
  
  return <>
  {data.todos.map((todo:todoType ) => (
    <div key={todo.id}>
    {todo.title}
    {todo.description}
    </div>
  ))}

  </>

}
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { todosAtomFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  return (
    <>
      <h2>{currentTodo.title}</h2>
      <p>{currentTodo.description}</p>
    </>
  );
}

export default App;

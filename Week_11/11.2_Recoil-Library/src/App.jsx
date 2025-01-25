import RecoilCounter from "./components/recoilCounter/RecoilCounter";
import MemoCounter from "./components/MemoHook/MemoCounter";
import RecoilSelector from "./components/recoilSelector/RecoilSelector";

function App() {
  return (
    <>
      <RecoilSelector />
      <MemoCounter />
      <RecoilCounter />
    </>
  );
}

export default App;

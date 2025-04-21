import PrevValue from "./components/UsePrevHook/PrevValue";
import Fetch from "./components/UseFetch/Fetch";
import Counter from "./components/CounterHook/Counter";
import Debounce from "./components/DebounceHook/Debounce";

function App() {
  return (
    <>
      <Debounce />
      <PrevValue />
      <Fetch />
      <Counter />
    </>
  );
}

export default App;

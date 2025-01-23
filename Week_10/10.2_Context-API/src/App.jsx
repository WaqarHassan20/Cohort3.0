import BulbUsingContext from "./components/BulbUsingContext";
import CounterUsingContext from "./components/CounterUsingContext";
import LightBulb from "./components/ToggleBulb";
function App() {
  return (
    <>
      <CounterUsingContext />
      <BulbUsingContext />
      <LightBulb />
    </>
  );
}

export default App;

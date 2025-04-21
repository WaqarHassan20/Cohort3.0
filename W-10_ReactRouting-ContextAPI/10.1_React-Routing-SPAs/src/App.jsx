import Router from "./components/ReactRouterDOM";
import UseRefClock from "./components/StopStartClock";
import UseEffectHook from "./components/UseEffectHook";

function App() {
  return (
    <>
      <UseRefClock />
      <UseEffectHook />
      <Router />
    </>
  );
}

export default App;

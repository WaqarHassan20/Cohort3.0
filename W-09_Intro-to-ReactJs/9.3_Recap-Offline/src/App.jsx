import StaticComponent from "./components/StaticComponent"
import ToggleMessage from "./components/ToggleMessage"
import Addcomponent from "./components/Addcomponent"
import BellIcon from "./components/BellIcon"
import UseEffectHook from "./components/UseEffect"
import UseEffectWithTodo from "./components/UseEffectWithTodo"

function App() {

  return (
    <>
      <UseEffectWithTodo />
      <UseEffectHook />
      <BellIcon />
      <Addcomponent />
      <ToggleMessage />
      <StaticComponent />
    </>
  )
}

export default App

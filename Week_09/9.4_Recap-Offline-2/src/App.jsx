import Children from "./components/Children"
import ErrorHandler from "./components/ErrorBoundry"
import UniqueID from "./components/UniqueID"

function App() {



  return (
    <>
      <ErrorHandler />
      <UniqueID />
      <Children />
    </>
  )
}

export default App
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

export default function App() {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase() {
    setCount((count) => count + 1)
  }
  function decrease() {
    setCount2((count) => count - 1)
  }

  return (
    <>
      <Counter count={count} count2={count2} />
      <button onClick={increase}>Home</button>
      <button onClick={decrease}>Notifications</button>
    </>
  )

}


function Counter(props) {


  useEffect(() => {
    console.log("Mount time")

    return () => {
      console.log("Unmount time")
    }
  }, [])


  useEffect(() => {
    console.log("State is changed")
    return () => {
      // clean up means that if i am at home page, clear home paage just beofre going to another navigation like notifications  
      console.log("Clean Up inside second effect")
    }
  }, [props.count])


  return <>
    <h1>Counter one = {props.count}</h1>
    <h1>Counter two = {props.count2}</h1>
  </>
}



// -> Key Functions and Execution Summary:
// 1- useEffect: Runs once on mount, starting the setInterval to update count every 1000ms.
// 2- setInterval Callback: Runs indefinitely every 1000ms, incrementing count by 1.
// 3- increase Function: Runs when the button is clicked, incrementing count by 1.
// 4- Render Function: Runs initially and whenever count changes.

// -> Execution Flow:
// 1- On Mount: useEffect sets up setInterval, and the component renders with count = 0.
// 2- On State Change (count): The component re-renders to reflect the updated count.
// 3- On Button Click: increase triggers, updates count, and causes a re-render.

// -> Frequency of Runs:
// 1- useEffect: Once on mount.
// 2- setInterval Callback: Every 1000ms indefinitely.
// 3- increase: Dependent on user clicks.
// 4- Render Function: Once initially, then on every count change.










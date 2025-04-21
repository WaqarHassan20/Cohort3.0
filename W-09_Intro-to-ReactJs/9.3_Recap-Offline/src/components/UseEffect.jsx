import { useEffect } from "react";
import { useState } from "react";

function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const intervalId =
            setInterval(() => {
                setCount((count) => count + 1);
            }, 1000);
        return () => { clearInterval(intervalId) }

    }, []);

    return (
        <h1
            style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: 25,
                fontSize: 50,
            }}
        >
            {count} Seconds elapsed
        </h1>
    );
}

function UseEffectHook() {
    const [showTimer, setShowTimer] = useState(true);

    useEffect(() => {
        const clock = setInterval(() => {
            setShowTimer((cv) => !cv);
        }, 5000);

        return () => {
            clearInterval(clock);
        };
    }, []);

    return (
        <>
            <div
                style={{
                    backgroundColor: "#1F4529",
                    height: "98vh",
                    padding: 20,
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 200,
                }}
            >
                <div
                    style={{
                        background: "#F3F3E0",
                        height: "12rem",
                        width: "40rem",
                        borderRadius: 20,
                    }}
                >
                    {showTimer && <Timer />}
                </div>
            </div>
        </>
    );
}

export default UseEffectHook;

// useEffect in React allows side effects like data fetching or subscriptions. It runs after render and can be controlled with a dependency array, cleaning up resources when necessary.

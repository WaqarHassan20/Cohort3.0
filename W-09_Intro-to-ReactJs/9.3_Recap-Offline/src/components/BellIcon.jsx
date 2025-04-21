import { useState } from "react";

function BellIcon() {

    const [count, setCount] = useState(0)

    function increaseCount() {
        setCount(C => C + 1)
    }

    const bellIconStyle = {
        position: "relative",   // Makes the bell icon the reference point for absolute positioning
        width: "50px",          // Size of the bell icon
        height: "50px",         // Size of the bell icon
        backgroundColor: "#3B1C32",  // Color of the bell icon
        borderRadius: "50%",    // Make the bell icon circular
        display: "flex",        // Flex to center content inside the bell icon
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Optional: shadow for the bell icon
    };

    const circleStyle = {
        position: "absolute",   // Position the circle relative to the bell icon
        top: "-10px",           // Move the circle up above the bell icon
        right: "-10px",         // Move the circle to the right of the bell icon
        width: "20px",          // Size of the circle
        height: "20px",         // Size of the circle
        borderRadius: "50%",    // Make the div a circle
        backgroundColor: "#ff0000",  // Circle color (red for notification)
        color: "white",         // Text color inside the circle
        fontSize: "14px",       // Font size
        fontWeight: "bolder",     // Make text bold
        display: "flex",        // Flexbox for centering content inside the circle
        justifyContent: "center",
        alignItems: "center",
    };

    const buttonStyle = {
        padding: "10px 20px",       // Padding inside the button
        backgroundColor: "green", // Green background color
        color: "white",             // White text color
        border: "none",             // No border
        borderRadius: "5px",        // Rounded corners
        fontSize: "16px",           // Font size
        cursor: "pointer",          // Pointer cursor on hover
        transition: "background-color 0.3s ease", // Smooth background color transition
    };

    return (
        <div style={{ backgroundColor: "#000957", height: "98vh", padding: 20, display: "flex", justifyContent: "center", paddingTop: 200 }}>
            <div style={{ background: "#F3F3E0", height: "12rem", width: "24rem", borderRadius: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 30, paddingTop: 30 }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={bellIconStyle}>
                            <div style={circleStyle}>
                                {count}
                            </div>
                            <span style={{ fontSize: "24px", color: "white" }}>🔔</span>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button
                            style={buttonStyle} onClick={increaseCount}>Increase Notification</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BellIcon
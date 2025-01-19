import { useEffect, useState } from "react"

function UseEffectWithTodo() {

    const [currentTab, setCurrentTab] = useState("Feed")
    const [tabData, setTabData] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
            .then(async (res) => {
                const data = await res.json();
                setTabData(data)
                setLoading(false)
            })
    }, [currentTab])

    return (
        <div style={{ backgroundColor: "#1F4529", height: "98vh", padding: 20, display: "flex", justifyContent: "center", paddingTop: 200 }}>
            <div style={{ background: "#F3F3E0", height: "12rem", width: "40rem", borderRadius: 20 }}>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: 30, gap: 30 }}>

                    <button
                        onClick={() => setCurrentTab(1)}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: currentTab == "1" ? "red" : "black",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            fontWeight: "bolder",
                            fontSize: "16px",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease",
                        }}>
                        Todo 1
                    </button>

                    <button
                        onClick={() => setCurrentTab(2)}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: currentTab == 2 ? "red" : "black",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            fontSize: "16px",
                            fontWeight: "bolder",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease",
                        }}>
                        Todo 2
                    </button>

                    <button
                        onClick={() => setCurrentTab(3)}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: currentTab == 3 ? "red" : "black",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            fontSize: "16px",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease",
                            fontWeight: "bolder",

                        }}>
                        Todo 3
                    </button>

                    <button
                        onClick={() => setCurrentTab(4)}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: currentTab == 4 ? "red" : "black",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            fontSize: "16px",
                            cursor: "pointer",
                            fontWeight: "bolder",
                            transition: "background-color 0.3s ease",
                        }}>
                        Todo 4
                    </button>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 30, gap: 30 }}>
                    <h1>{loading == true ? "Loading...." : tabData.title}</h1>
                </div>

            </div>
        </div >
    )
}

export default UseEffectWithTodo
import PostComponent from "./PostComponent"
import { useState } from "react"

function Addcomponent() {
    const [posts, setPosts] = useState([])


    const postComponents = posts.map((post, index) =>
        <PostComponent
            key={index}
            name={post.name}
            subtitle={post.subtitle}
            time={post.time}
            image={post.image}
            description={post.description}
        />)

    function addPost() {
        setPosts([...posts, {
            name: "Harkirat", description: "How to get hired in 2024? I lost my job in 2022 and get involved in the field of programming and developing.I follwed the mentor named as Harkirat Singh of India.", subtitle: "38550 followers", time: "20m.", image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
        }])
    }

    return <>
        <div style={{ backgroundColor: "#441752", height: "98vh", padding: 20 }}>
            <button
                style={{ backgroundColor: "green", padding: 11, borderRadius: 5, borderColor: "whitesmoke", color: "white", fontWeight: "bolder" }}
                onClick={addPost}>Add Post</button>
            <div>
                <div>
                    {postComponents}
                </div>
            </div>
        </div >
    </>
}

export default Addcomponent


// 1- Initialize State: useState creates the posts state as an empty array to store post data.
// 2- Map Posts to Components: posts.map() generates PostComponent instances dynamically by passing post properties (props) for rendering.
// 3- Add Post on Button Click: The addPost function uses setPosts to update the state by appending a new post object to the posts array.
// 4- Trigger Re-render: Updating the posts state triggers React to re-render the Addcomponent function.
// 5- Recalculate Components: During the re-render, postComponents is recalculated with the updated posts data.
// 6- Render Updated UI: The button and dynamically updated PostComponent instances are rendered on the page.
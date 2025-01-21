function UniqueID() {
    const todos = [
        { title: "Eat food", done: true },
        { title: "Go for morning Walk", done: false },
    ];

    const todoComponents = todos.map((todo) => {
        return <Todo title={todo.title} done={todo.done} />;
    });

    return <div>{todoComponents}</div>;
}

export default UniqueID;

function Todo({ title, done }) {
    return (
        <div>
            <div style={{ backgroundColor: "green", width: "30%", padding: 5, paddingLeft: 20, borderRadius: 20, marginTop: 5, marginBottom: 10 }}>
                <h1>
                    {title} - {done ? "Done !" : "Not Done !"}
                </h1>
            </div>
        </div>

    );
}

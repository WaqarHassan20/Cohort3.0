
const Wrapper = ({ children }) => {

    return <div style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px',
        margin: '10px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
    }}>
        {children}
    </div>
}


function Children() {
    return (
        <div style={{ backgroundColor: "#26355D", color: "white", height: "90vh", padding: 20, paddingTop: 30 }}>
            <div style={{}}>
                <Wrapper>
                    <h2>Card Title</h2>
                    <p>This is some content inside the card.</p>
                </Wrapper>

                <Wrapper>
                    <h2>Another Card</h2>
                    <label >Enter something about yourself</label>
                    <br />
                    <br />
                    <input type="text" />
                    <p>This card has different content!</p>
                </Wrapper>
            </div>
        </div>
    )
}

export default Children

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20, height: "20%" }
const imgStyle = { width: 40, height: 40, borderRadius: 20 }

function StaticComponent() {
    return <>
        <div style={{
            backgroundColor: "darkslategrey", height: "98vh", display: "flex", justifyContent: "center", alignItems: "center"
        }}>
            <div style={style}>
                <div style={{ display: "flex" }}>
                    <img src="https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
                        style={imgStyle} />

                    <div style={{ fontSize: 13, marginLeft: 10 }}>
                        <b>100xdevs</b>
                        <div>23888 followers</div>
                        <div>12m</div>
                    </div>
                </div>

                <div style={{ fontSize: 15 }}>
                    Want to know how to win big? Check out how these folks won the $6000 in bounties.
                </div>
            </div >
        </div>
    </>
}

export default StaticComponent
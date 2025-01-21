import React from "react"


class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log("Error Caught : ", error, info)
    }

    render() {
        if (this.state.hasError) {
            return <div style={{ backgroundColor: "red", borderRadius: 20, padding: 10, width: "20%" }}>
                <h2> Random ERROR Occured !</h2>
            </div>
        }
        return this.props.children
    }
}


function Card1() {
    // throw new Error
    return <div style={{ backgroundColor: "green", borderRadius: 20, padding: 10 }}>
        <h2> Hi there !</h2>
    </div>
}
function Card2() {
    // throw new Error
    return <div style={{ backgroundColor: "darkorange", borderRadius: 20, padding: 10, margin: 10, marginTop: 30 }}>
        <h2> Hello there !</h2>
    </div>
}

function ErrorHandler() {

    return (
        <div style={{ backgroundColor: "#FEFFAC", color: "white", height: "92vh", padding: 20, paddingTop: 30 }}>
            <ErrorBoundry>
                <Card1 />
            </ErrorBoundry>
            <ErrorBoundry>
                <Card2 />
            </ErrorBoundry>
        </div>
    )
}

export default ErrorHandler
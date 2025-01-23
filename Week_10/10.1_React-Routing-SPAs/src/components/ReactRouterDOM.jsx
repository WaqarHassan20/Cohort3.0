import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"

function Router() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}  >

          <Route path="/" element={<Landing />} />

          <Route path="/about" element={<About />} />

          <Route path="/myInfo" element={<Information />} />

          <Route path="*" element={<ErrorHandler />} />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

function Layout() {
  return (
    <div style={{ height: "100vh", backgroundColor: "grey", color: "white", display: "flex", flexDirection: "column" }}>

      <Header />

      <div style={{
        flex: 1,
        backgroundColor: "rebeccapurple",
        padding: "20px",
        overflowY: "auto"
      }}>
        <Outlet />
      </div>

      <footer style={{
        height: "10vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <b style={{
          color: "white", fontSize: "30px"
        }} >Hi there, I am the footer</b>
      </footer>

    </div>
  );
}




const linkStyle = {
  textDecoration: "none",
  color: "white",
  transition: "color 0.3s ease",
};


function Header() {
  return (
    <div style={{
      backgroundColor: "black",
      padding: "10px 20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
    }}>
      <div style={{ display: "flex", justifyContent: "space-around", gap: 20 }}>
        <Link to={"/"} style={linkStyle}><h1>Home</h1></Link>
        <Link to={"/myInfo"} style={linkStyle}><h1>Contact</h1></Link>
        <Link to={"/about"} style={linkStyle}><h1>About</h1></Link>
      </div>
    </div>
  );
}


function ErrorHandler() {
  return <h1>404 : Page Not Found</h1>
}



function Landing() {
  return <h1>Welcome to landing page of website</h1>
}



function About() {

  const navigate = useNavigate()

  function redirectUser() {
    navigate("/")
  }
  return <>
    <div>
      <button
        onClick={redirectUser}
        style={{
          backgroundColor: "green",
          fontWeight: "bolder",
          color: "white",
          padding: "15px 32px",
          fontSize: "16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}>
        Go back to Home
      </button >
      <h1>How you can contact me through site</h1>
    </div>
  </>
}


function Information() {
  return <h1>Personal Information page on website</h1>
}


export default Router





/* <Router>

  <Routes>

    <Route path="/" element={<Home />} />

    <Route path="dashboard" element={<Dashboard />}>
      <Route path="overview" element={<Overview />} />
      <Route path="settings" element={<Settings />} />
    </Route>

  </Routes>

</Router> */

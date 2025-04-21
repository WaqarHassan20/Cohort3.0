import SideBar from "./components/SideBar";
import SideContent from "./components/SideContent";

function App() {
  return (
    <>
      <div className="flex bg-gray-100 ">
        <SideBar />
        <SideContent />
      </div>
    </>
  );
}

export default App;

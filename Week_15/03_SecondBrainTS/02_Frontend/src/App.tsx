import { useState } from "react";
import { Button } from "./components/Button";
import Card from "./components/Card";
import CreateContentModel from "./components/CreateContentModel";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";
import Sidebar from "./components/Sidebar";

function App() {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <>
      <Sidebar />
      
      <div className="p-4 ml-72 bg-[#F8FAFC] min-h-screen">
        <CreateContentModel
          open={modelOpen}
          onClose={() => {
            setModelOpen(false);
          }}
        />
        <div className="flex justify-end gap-4 mt-2 ">
          <Button
            onClick={() => {
              setModelOpen(true);
            }}
            text="Add Icon"
            variant="primary"
            startIcon={<PlusIcon />}
          />
          <Button
            text="Share Brain"
            variant="secondary"
            startIcon={<ShareIcon />}
          />
        </div>

        <div className="flex gap-4">
          <Card
            title="5 Crore"
            link="https://www.youtube.com/embed/E5zXCY63WpU?si=EKyvU4QlklhAyoq8"
            type="youtube"
          />

          <Card
            title="Start-Up"
            link="https://twitter.com/im_tolumichael/status/1890414337254178851?ref_src=twsrc%5Etfw"
            type="twitter"
          />
        </div>
      </div>
    </>
  );
}

export default App;

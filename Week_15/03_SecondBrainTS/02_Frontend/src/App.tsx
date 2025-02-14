import { Button } from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <Button text="Share" variant="secondary" startIcon={<ShareIcon />} />
      <Button text="Add Icon" variant="primary" startIcon={<PlusIcon />} />
    </>
  );
}

export default App;

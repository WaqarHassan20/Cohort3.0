import { PlusIcon } from "./components/icons/PlusIcon";
import { Button } from "./components/ui/Button";

function App() {
  return (
    <>
      <Button
        variant="primary"
        size="sm"
        onClick={() => {}}
        text="Add"
        startIcon={PlusIcon}
      />
      <Button
        variant="secondary"
        size="lg"
        onClick={() => {}}
        text="Share"
        startIcon=""
      />
      <Button
        variant="primary"
        size="md"
        onClick={() => {}}
        text="Share"
        startIcon=""
      />
    </>
  );
}

export default App;

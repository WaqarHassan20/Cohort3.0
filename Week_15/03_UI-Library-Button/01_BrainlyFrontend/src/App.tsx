import { PlusIcon } from "./components/icons/PlusIcon";
import { ShareIcon } from "./components/icons/ShareIcon";
import { Button } from "./components/ui/Button";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-red-800 w-screen h-screen">
        <div className="flex gap-10 items-center justify-center">
          <div>
            <h1 className="text-white text-xl font-bold py-4">Small Buttons</h1>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {}}
              text="Add"
              startIcon={<PlusIcon size="sm" />}
            />
            <Button
              variant="primary"
              size="sm"
              onClick={() => {}}
              text="Add"
              startIcon={<ShareIcon size="sm" />}
            />
          </div>
          <div>
            <h1 className="text-white text-4xl font-bold py-4">
              Large Buttons
            </h1>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {}}
              text="Share"
              startIcon={<PlusIcon size="lg" />}
            />
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {}}
              text="Share"
              startIcon={<ShareIcon size="lg" />}
            />
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold py-4">
              Medium Buttons
            </h1>
            <Button
              variant="primary"
              size="md"
              onClick={() => {}}
              text="Share"
              startIcon={<PlusIcon size="md" />}
            />
            <Button
              variant="primary"
              size="md"
              onClick={() => {}}
              text="Share"
              startIcon={<ShareIcon size="md" />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

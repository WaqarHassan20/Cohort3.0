import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";

// interface CreateContentModelProps {
//   open: boolean;
//   onClose: () => void;
// }

function CreateContentModel({ open, onClose }) {
  return (
    <>
      <div>
        {open && (
          <div className="bg-slate-600 fixed top-0 left-0 w-screen h-screen opacity-60 flex justify-center items-center">
            <span className="bg-white opacity-100 p-4 rounded-lg text-lg font-bold">
              <div className="flex justify-end mb-1">
                <div onClick={onClose}>
                  <CrossIcon />
                </div>
              </div>

              <div>
                <Input placeholder="Title" />
                <Input placeholder="Link" />
              </div>
              <div className="flex justify-center my-6">
                <Button text="Submit" variant="primary" />
              </div>
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default CreateContentModel;

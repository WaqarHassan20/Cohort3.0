import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

// interface CreateContentModelProps {
//   open: boolean;
//   onClose: () => void;
// }

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
  Instagram = "instagram",
  Facebook = "facebook",
  LinkedIn = "linkedin",
}

function CreateContentModel({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const tagRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = titleRef.current?.value;
    const tags = titleRef.current?.value;

    const tagsArray = tags?.split(",").map((tag) => tag.trim()) || [];

    console.log(title, link, type, tagsArray);

    try {
      await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        { title, link, type, tagsArray },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
    } catch (error) {
      console.error("Error adding content:", error);
    }
  }

  return (
    <>
      <div>
        {open && (
          <div className="bg-slate-900 fixed top-0 left-0 w-screen h-screen opacity-98 flex justify-center items-center">
            <span className="bg-white opacity-100 p-4 w-full max-w-sm h-4/6 rounded-lg text-lg font-bold">
              <div className="flex justify-end mb-1">
                <div onClick={onClose}>
                  <CrossIcon />
                </div>
              </div>

              <div className="mt-2">
                <Input ref={titleRef} placeholder="Title" />
                <Input ref={linkRef} placeholder="Link" />
                <Input ref={tagRef} placeholder="Tags" />
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="font-semibold mt-7 text-xl ">
                  Select the type :
                </h1>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Button
                    onClick={() => {
                      setType(ContentType.Youtube);
                    }}
                    text="Youtube"
                    variant={
                      type === ContentType.Youtube ? "primary" : "secondary"
                    }
                  />
                  <Button
                    onClick={() => {
                      setType(ContentType.Twitter);
                    }}
                    text="Twitter"
                    variant={
                      type === ContentType.Twitter ? "primary" : "secondary"
                    }
                  />
                  <Button
                    onClick={() => {
                      setType(ContentType.LinkedIn);
                    }}
                    text="LinkedIn"
                    variant={
                      type === ContentType.LinkedIn ? "primary" : "secondary"
                    }
                  />
                  <Button
                    onClick={() => {
                      setType(ContentType.Instagram);
                    }}
                    text="Instagram"
                    variant={
                      type === ContentType.Instagram ? "primary" : "secondary"
                    }
                  />
                  <Button
                    onClick={() => {
                      setType(ContentType.Facebook);
                    }}
                    text="Facebook"
                    variant={
                      type === ContentType.Facebook ? "primary" : "secondary"
                    }
                  />
                </div>
              </div>

              <div className="flex justify-center mt-12 px-7">
                <Button
                  onClick={addContent}
                  fullWidth={true}
                  text="Submit"
                  variant="primary"
                />
              </div>
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default CreateContentModel;

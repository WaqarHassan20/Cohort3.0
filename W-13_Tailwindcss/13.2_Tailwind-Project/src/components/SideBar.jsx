import { useEffect, useState } from "react";
import ToggleBarButton from "./ToggleBarButton";
import Options from "./Options";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

function SideBar() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setSideBarOpen(isDesktop);
  }, [isDesktop]);

  if (!sideBarOpen) {
    return (
      <div className="fixed top-0 left-2 p-2  text-black">
        <div
          onClick={() => setSideBarOpen(!sideBarOpen)}
          className="cursor-pointer"
        >
          <ToggleBarButton />
        </div>
      </div>
    );
  }
  return (
    <div
      className={`w-64 sm:w-[22%] flex justify-center items-start mt-32 p-4 border-r border-black  transition-all duration-500 ease-in-out ${
        !isDesktop ? "fixed left-0 top-0" : ""
      } `}
    >
      <div className="fixed top-0 left-2 p-2">
        <div
          onClick={() => setSideBarOpen(!sideBarOpen)}
          className="cursor-pointer"
        >
          <ToggleBarButton />
        </div>
      </div>
      <Options />
    </div>
  );
}

export default SideBar;

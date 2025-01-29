import { useEffect, useState } from "react";
import ToggleBarButton from "./ToggleBarButton";

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
    setSideBarOpen(isDesktop); // Open on desktop, close on mobile
  }, [isDesktop]);

  if (!sideBarOpen) {
    return (
      <div className="fixed top-0 left-2 p-2 text-white">
        <div
          onClick={() => setSideBarOpen(!sideBarOpen)}
          className="cursor-pointer"
        >
          <ToggleBarButton />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`bg-pink-200 w-16 sm:w-96 h-screen fixed top-0 left-0 z-10 transition-all duration-500 ease-in-out`}
      >
        <div className="fixed top-0 left-2 p-2">
          <div
            onClick={() => setSideBarOpen(!sideBarOpen)}
            className="cursor-pointer"
          >
            <ToggleBarButton />
          </div>
        </div>
      </div>
    );
  }
}
export default SideBar;

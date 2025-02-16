import { ReactElement } from "react";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { Logo } from "../icons/Logo";

function Sidebar() {
  return (
    <>
      <div className="h-screen w-72 bg-white fixed border-r-2 border-slate-200 left-0 top-0 pl-6 ">
        <div className="flex items-center text-2xl font-semibold pt-4 ">
          <div className="text-purple-600">
            <Logo />
          </div>
          Second Brain
        </div>
        <div className="pt-4">
          <SidebarItem text="Twitter" icon={<TwitterIcon />} />
          <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;

// =========================================== //
// =========================================== //

function SidebarItem({ text, icon }: itemProps) {
  return (
    <>
      <div className="flex justify-start items-center py-2">
        <div className="pr-2">{icon}</div>
        <div className="font-medium">{text}</div>
      </div>
    </>
  );
}

interface itemProps {
  text: string;
  icon: ReactElement;
}

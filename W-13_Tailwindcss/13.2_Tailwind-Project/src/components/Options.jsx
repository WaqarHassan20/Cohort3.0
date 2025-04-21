import myImage from "./myImage.jpeg";
import {
  FaHome,
  FaCog,
  FaTasks,
  FaFileInvoiceDollar,
  FaVideo,
} from "react-icons/fa";
export default function Options() {
  return (
    <>
      <div className="flex flex-col items-center gap-8 justify-center ">
        <div className="hover:bg-gray-300 flex items-center space-x-[160px] rounded-md p-2">
          <button className="font-bold bg-blue-800 p-1 text-sm text-white tracking-tight outline-none rounded-md">
            Webinar.gg
          </button>
          <img src={myImage} height={40} width={40} alt="myImg" className="rounded-xl" />
        </div>
        <div className="hover:bg-gray-300 flex items-center p-3 space-x-[200px] rounded-md">
          <span className="font-bold">Home</span>
          <FaHome />
        </div>

        <div className="hover:bg-gray-300 flex items-center p-3 space-x-[180px] rounded-md">
          <span className="font-bold">Settings</span>
          <FaCog />
        </div>

        <div className="hover:bg-gray-300 flex items-center p-3  space-x-[180px] rounded-md">
          <span className="font-bold">Manage</span>
          <FaTasks />
        </div>

        <div className="hover:bg-gray-300 flex items-center p-3  space-x-[190px] rounded-md">
          <span className="font-bold">Billing</span>
          <FaFileInvoiceDollar />
        </div>

        <div className="hover:bg-gray-300 flex items-center p-3 space-x-[170px] rounded-md">
          <span className="font-bold">Webinars</span>
          <FaVideo />
        </div>
      </div>
    </>
  );
}

//    <div className="flex flex-col space-y-4 p-4 text-xl text-gray-700">

//     </div>
//   );
// }

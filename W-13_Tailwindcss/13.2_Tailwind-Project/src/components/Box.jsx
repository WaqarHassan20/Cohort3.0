import { FaCalendar, FaPlus, FaRecordVinyl } from "react-icons/fa";

export default function Box() {
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="flex flex-col items-center gap-4 p-4 rounded-xl">
          <div className=" bg-cyan-600 w-fit p-6 rounded-xl">
            <FaCalendar />
          </div>
          <p className="text-sm font-medium ">Schedule</p>
        </div>

        <div className="flex flex-col items-center gap-4 p-4 rounded-xl">
          <div className=" bg-cyan-600 w-fit p-6 rounded-xl">
            <FaCalendar />
          </div>
          <p className="text-sm font-medium ">Attend </p>
        </div>

        <div className="flex flex-col items-center gap-4 p-4 rounded-xl">
          <div className=" bg-cyan-600 w-fit p-6 rounded-xl">
            <FaRecordVinyl />
          </div>
          <p className="text-sm font-medium ">Recordings</p>
        </div>

        <div className="flex flex-col items-center gap-4 p-4 rounded-xl">
          <div className=" bg-cyan-600 w-fit p-6 rounded-xl">
            <FaPlus />
          </div>
          <p className="text-sm font-medium ">Create</p>
        </div>
      </div>
    </>
  );
}

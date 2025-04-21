export default function TimeDiv({ value, status }) {
  return (
    <div className="flex rounded-md my-2 px-2 gap-3">
    
      <div className="flex flex-col p-1">
        <p className="font-bold text-xl">11:40 AM</p>
        <p className="font-medium text-sm">11:40 AM</p>
      </div>

      <div className="h-14 w-0.5 bg-black"></div>
      
      <div className="flex flex-col pt-1">
        <p className="font-light text-sm">{status}</p>
        <p className="font-bold text-xl">{value}</p>
      </div>
    
    </div>
  );
}

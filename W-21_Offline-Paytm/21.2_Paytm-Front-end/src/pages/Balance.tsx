export const Balance = ({ value }: { value: string }) => {
    return (
      <div className="flex items-center justify-center gap-4 p-4 
        bg-white/80 rounded-2xl shadow-xl 
        border border-gray-300 backdrop-blur-md">
  
        <div className="font-bold text-lg text-gray-800">
          Your Balance
        </div>
  
        <div className="font-semibold text-lg text-indigo-600">
          ₹ {value}
        </div>
      </div>
    );
  }

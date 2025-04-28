import { useSearchParams } from "react-router-dom";

export function SendMoney() {
    const [searchParams] = useSearchParams();
    
    // const id = searchParams.get("id");  
    const name = searchParams.get("name");  
    
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white via-blue-100 to-white">
            <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 w-96 space-y-8 border border-gray-200">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-800">Send Money</h2>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-400 to-blue-400 flex items-center justify-center shadow-md">
                        <span className="text-2xl text-white font-semibold">{name[0].toUpperCase()}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700">{name}</h3>
                </div>
                <div className="space-y-4">
                    <div className="space-y-1">
                        <label
                            htmlFor="amount"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Amount (in Rs)
                        </label>
                        <input
                            id="amount"
                            type="number"
                            placeholder="Enter amount"
                            className="w-full rounded-lg border border-gray-300 bg-white/70 backdrop-blur-sm px-4 py-2 text-gray-800 placeholder-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
                        />
                    </div>
                    <button
                        className="w-full rounded-lg bg-gradient-to-tr from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold py-2 shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        Initiate Transfer
                    </button>
                </div>
            </div>
        </div>
    );
};

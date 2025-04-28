export function Button({ label, onClick }: { label: string; onClick?: () => void }) {
    
    

    return (
        <button
            onClick={onClick}
            type="button"
            className="w-full text-gray-800 bg-white hover:bg-indigo-700 hover:text-white  border-1 border-gray-300 focus:outline-none cursor-pointer 
            font-semibold rounded-md text-base px-5 py-2.5 mb-2 transition-all duration-300 shadow-sm hover:shadow-2xl"
        >
            {label}
        </button>
    );
}

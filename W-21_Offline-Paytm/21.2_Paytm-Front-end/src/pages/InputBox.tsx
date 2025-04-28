export function InputBox({ label, placeholder, onChange }: {
    label: string;
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className="w-full">
            <div className="text-sm font-semibold text-gray-700 py-2">
                {label}
            </div>
            <input
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-3 py-2 bg-white/80 backdrop-blur-md rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
            />
        </div>
    );
}

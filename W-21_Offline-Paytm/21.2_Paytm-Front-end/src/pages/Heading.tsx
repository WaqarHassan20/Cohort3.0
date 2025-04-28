export function Heading({ label }: { label: string }) {
    return (
        <div className="text-4xl text-center font-extrabold text-gray-800 pt-6 drop-shadow-md">
            {label}
        </div>
    );
}

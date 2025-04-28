
import { Link } from "react-router-dom"

export function BottomWarning({ label, buttonText, to }: { label: string; buttonText: string; to: string }) {
  return (
    <div className="py-3 text-sm flex justify-center text-gray-600">
      <div>
        {label}
      </div>
      <Link 
        className="pl-1 underline text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
        to={to}
      >
        {buttonText}
      </Link>
    </div>
  );
}

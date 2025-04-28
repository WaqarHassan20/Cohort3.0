import { Appbar, Balance, Users } from "./";

export const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-200 backdrop-blur-lg">
            <Appbar />
            <div className="mt-8 p-6 bg-white/60 rounded-2xl shadow-xl backdrop-blur-md border border-white/30">
                <Balance value={"10,000"} />
                <div className="mt-8">
                    <Users />
                </div>
            </div>
        </div>
    );
};

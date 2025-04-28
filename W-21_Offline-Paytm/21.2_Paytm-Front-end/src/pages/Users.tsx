import { useEffect, useState } from "react"
import { Button } from "./"
import axios from "axios"
import { useNavigate } from "react-router-dom";

interface User {
    firstName: string;
    lastName: string;
    _id: number;
}

interface UserProps {
    user: User;
}

export const Users = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get<{ user: User[] }>("http://localhost:3000/api/v1/user/bulk", {
            headers: {
                authorization: `${token}`
            }
        }).then((res) => {
            setUsers(res.data.user);
        })
    }, [])

    return (
        <div className="w-full mx-auto p-6 bg-white rounded-xl shadow-sm">
           
            <div className="mb-4">
                <div className="relative">
                    <input
                        onChange={(e) => {
                            const value = e.target.value;
                            const token = localStorage.getItem("token");
                            axios.get<{ user: User[] }>(`http://localhost:3000/api/v1/user/bulk?filter=${value}`, {
                                headers: {
                                    authorization: `${token}`
                                }
                            }).then((res) => {
                                setUsers(res.data.user);
                            })
                        }}
                        type="text" 
                        placeholder="Search users..." 
                        className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-300 outline-none transition-all bg-white/90 backdrop-blur-sm"
                    />
                    <svg 
                        className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                    >
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className="space-y-3">
                {users.map(user => <User key={user._id} user={user} />)}
            </div>
        </div>
    )
}

function User({ user }: UserProps) {
    const navigate = useNavigate();


    return (
        <div className="flex justify-between items-center p-3 mb-3 rounded-xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-lg hover:bg-white/80 hover:border-1 hover:border-gray-400 transition-all duration-300 border border-gray-200">
            <div className="flex items-center space-x-4">
                <div className="rounded-full h-12 w-12 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-600 font-bold text-lg shadow-inner">
                    {user.firstName[0]}{user.lastName[0]}
                </div>
                <div className="font-semibold text-gray-800 text-lg">
                    {user.firstName} {user.lastName}
                </div>
            </div>
            <div>
                <Button label="Send Money" 
                //  onClick={() => navigate(`/send?id=${user._id}&name=${user.firstName}`)}
                onClick={() => {navigate("/send?id=" + user._id+ "&name=" + user.firstName)
                }}/>
            </div>
        </div>
    );
}

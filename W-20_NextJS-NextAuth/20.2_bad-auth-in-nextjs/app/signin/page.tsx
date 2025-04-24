"use client"

import axios from "axios"

export default function Signin() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-xl p-10 w-80 text-white">
                <p className="text-2xl font-bold text-center mb-6 text-cyan-400 drop-shadow-[0_0_5px_#0ff]">
                    Sign In Page
                </p>

                <input
                    type="text"
                    placeholder="Username"
                    className="w-full mb-4 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input
                    type="text"
                    placeholder="Password"
                    className="w-full mb-6 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />

                <div className="flex justify-center">
                    <button
                    className="w-40 py-2 bg-cyan-500/30 text-cyan-300 font-semibold rounded-lg border border-cyan-400 hover:bg-cyan-500/50 hover:text-white transition-all duration-200 shadow-[0_0_10px_#0ff]"
                    onClick={async () => {
                        const response = await axios.post("http://localhost:3000/api/signin", {
                            username: "bappa",
                            password: "stunning"
                        })
                        
                        localStorage.setItem("token", response.data.token)
                    }}
                >
                    Sign In
                </button>
                </div>
            </div>
        </div>
    )
}

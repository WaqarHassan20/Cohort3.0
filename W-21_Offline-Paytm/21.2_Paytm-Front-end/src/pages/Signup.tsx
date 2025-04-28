import { useState } from "react";
import { Heading, SubHeading, InputBox, Button, BottomWarning } from "./";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex justify-center bg-gradient-to-br from-blue-50 to-purple-50">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-200 blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-200 blur-3xl"></div>
            </div>

            <div className="flex items-center justify-center z-10 w-full px-4 ">
                <div className="rounded-2xl bg-white/80 backdrop-blur-md w-full max-w-md text-center p-8 h-max shadow-xl border border-white/90">
                    <Heading label={"Sign up"} />
                    <SubHeading label={"Enter your information to create an account"} />
                    
                    <div className="space-y-4 mt-6">
                        <InputBox 
                            onChange={(e) => { setFirstName(e.target.value) }}
                            placeholder="John" 
                            label={"First Name"} 
                        />
                        <InputBox
                            onChange={(e) => { setLastName(e.target.value) }}
                            placeholder="Doe" 
                            label={"Last Name"} 
                        />
                        <InputBox
                            onChange={(e) => { setEmail(e.target.value) }}
                            placeholder="harkirat@gmail.com" 
                            label={"Email"} 
                        />
                        <InputBox
                            onChange={(e) => { setPassword(e.target.value) }}
                            placeholder="123456" 
                            label={"Password"} 
                        />
                    </div>

                    <div className="pt-6">
                        <Button
                            onClick={
                                async () => {
                                    const res = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                        firstName,
                                        lastName,
                                        username: email,
                                        password
                                    })
                                    console.log(res.data)
                                    const data = res.data as { status: string; token: string };
                                    localStorage.setItem("authorization", data.token);
                                    navigate("/signin")
                                }
                            }
                            label={"Sign up"}
                        />
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                        <BottomWarning 
                            label={"Already have an account?"} 
                            buttonText={"Sign in"} 
                            to={"/signin"} 
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
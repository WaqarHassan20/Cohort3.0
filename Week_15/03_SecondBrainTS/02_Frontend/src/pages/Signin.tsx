import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const navigate = useNavigate();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await axios.post(BACKEND_URL + "/api/v1/user/signin", {
      username,
      password,
    });

    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
  }

  return (
    <>
      <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-lg border-2 border-gray-300 shadow-xl min-w-48 px-2 py-6">
          <h2 className="text-3xl font-semibold text-center text-gray-700 mb-4">
            Sign Up
          </h2>

          <div>
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password" />
          </div>
          <div className="flex justify-center items-center p-5 mt-2">
            <Button
              onClick={signin}
              variant="primary"
              text="Sign-In"
              fullWidth={true}
              loading={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}

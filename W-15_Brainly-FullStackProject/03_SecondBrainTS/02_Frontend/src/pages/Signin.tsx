import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRef, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Link, useNavigate } from "react-router-dom";

export function Signin() {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function signin() {
    try {
      setLoading(true);
      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;

      const response = await axios.post(BACKEND_URL + "/api/v1/user/signin", {
        username,
        password,
      });

      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid username or password");
      setTimeout(() => setError(""), 3000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="h-screen w-screen bg-gray-200 dark:bg-gray-900 flex justify-center items-center">
        <div className="bg-white dark:bg-gray-800 lg:min-w-sm pt-10 rounded-xl border-2 border-gray-300 dark:border-gray-600 shadow-xl px-2 py-6 relative">
          <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-gray-200 mb-4">
            Log In
          </h2>

          {error && (
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded shadow-md">
              {error}
            </div>
          )}

          <div>
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password" type="password" />
          </div>

          <div className="flex justify-center items-center px-8 py-5 mt-2">
            <Button
              onClick={signin}
              variant="primary"
              text={loading ? "Loading..." : "Log In"}
              fullWidth={true}
              loading={loading}
            />
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-600 dark:text-gray-300">
              Don't have an account ?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign-up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

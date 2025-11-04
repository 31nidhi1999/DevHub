import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/userSlice";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate API response
    const fakeUser = { id: 1, name: "Nidhi", email:"nidhinayak31@gmail.com",role:"ADMIN" as "ADMIN" };
    const fakeToken = "abc123token";

    // Save to Redux
    dispatch(login({ user: fakeUser, token: fakeToken }));

    // Save token in localStorage (so user stays logged in)
    localStorage.setItem("token", fakeToken);

    navigate("/dashboard");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-indigo-600 mb-4">Login</h2>
      <form className="bg-white p-6 rounded shadow-md w-80">
        <input
          type="email"
          placeholder="Email"
          className="w-full border mb-3 p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border mb-4 p-2 rounded"
        />
        <button className="w-full bg-indigo-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import registerImage from "../assets/images/undraw_secure-login_m11a.png";

function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      fullName,
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-md overflow-hidden w-[700px]">

        {/* Left Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={registerImage}
            alt="Register"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-6"
        >
          <h2 className="text-2xl font-bold text-center mb-4">
            Register
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 mb-3 border rounded"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Create Account
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/loginForm" className="text-blue-600 font-semibold">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerImage from "../assets/images/signup.png";

function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; password?: string }>({});
  
  // Simple state to show success message
  const [isRegistered, setIsRegistered] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    if (password.length < 6) newErrors.password = "Password too short.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // If already registered, clicking the button takes them to login
    if (isRegistered) {
      navigate("/loginForm");
      return;
    }

    if (!validateForm()) return;

    // Set success state
    setIsRegistered(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-md overflow-hidden w-[700px]">
        
        {/* Left Image */}
        <div className="hidden md:block md:w-1/2">
          <img src={registerImage} alt="Register" className="h-full w-full object-cover" />
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

          {/* SIMPLE MESSAGE BOX */}
          {isRegistered && (
            <div className="bg-blue-50 border border-blue-200 text-blue-700 p-3 rounded mb-4 text-sm">
              <strong>Success!</strong> Your account is ready. 
              <br /> Click the button below to sign in.
            </div>
          )}

          <input
            type="text"
            placeholder="Full Name"
            className={`w-full p-2 mb-2 border rounded ${errors.fullName ? "border-red-500" : ""}`}
            value={fullName}
            disabled={isRegistered}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className={`w-full p-2 mb-2 border rounded ${errors.email ? "border-red-500" : ""}`}
            value={email}
            disabled={isRegistered}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className={`w-full p-2 mb-4 border rounded ${errors.password ? "border-red-500" : ""}`}
            value={password}
            disabled={isRegistered}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className={`w-full p-2 rounded text-white transition ${
              isRegistered ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isRegistered ? "Go to Login" : "Create Account"}
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/loginForm" className="text-blue-600 font-semibold">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
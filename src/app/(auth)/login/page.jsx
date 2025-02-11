"use client";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <FaLock className="text-purple-600" />
            Login
          </h1>
        </div>

        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
            <div className="flex items-center border rounded-lg px-4 py-3 gap-2 hover:border-purple-400">
              <FaUser className="text-gray-400" />
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <div className="flex items-center border rounded-lg px-4 py-3 gap-2 hover:border-purple-400">
              <FaEnvelope className="text-gray-400" />
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Password</label>
            <div className="flex items-center border rounded-lg px-4 py-3 gap-2 hover:border-purple-400">
              <FaLock className="text-gray-400" />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="w-full outline-none bg-transparent"
              />
              <button
                type="button"
                className="focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button 
            type="submit" 
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
         Login
          </button>
        </form>

        {/* Sign In Link */}
        <p className="mt-6 text-center text-gray-500">
        Don't  have an account?{" "}
          <a href="/register" className="text-purple-600 hover:text-purple-800 font-semibold">
          Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

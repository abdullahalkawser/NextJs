"use client"
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transition-all duration-300 hover:shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
            <FaLock className="text-purple-600" />
            Create Account
          </h1>
          <p className="text-gray-500">Join our community today!</p>
        </div>

        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
            <div className="flex items-center border rounded-lg px-4 py-3 gap-2 hover:border-purple-400 transition-colors">
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
            <div className="flex items-center border rounded-lg px-4 py-3 gap-2 hover:border-purple-400 transition-colors">
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
            <div className="flex items-center border rounded-lg px-4 py-3 gap-2 hover:border-purple-400 transition-colors">
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

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Confirm Password</label>
            <div className="flex items-center border rounded-lg px-4 py-3 gap-2 hover:border-purple-400 transition-colors">
              <FaLock className="text-gray-400" />
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="w-full outline-none bg-transparent"
              />
              <button
                type="button"
                className="focus:outline-none"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button 
            type="submit" 
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
          >
            <FaLock className="text-sm" />
            Register Now
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-white border rounded-lg p-3 hover:bg-gray-50 transition-colors text-gray-600 hover:text-gray-800">
              <FaGoogle className="text-red-500" />
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border rounded-lg p-3 hover:bg-gray-50 transition-colors text-gray-600 hover:text-gray-800">
              <FaGithub className="text-gray-800" />
              <span>GitHub</span>
            </button>
          </div>
        </div>

        {/* Sign In Link */}
        <p className="mt-8 text-center text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 hover:text-purple-800 font-semibold">
        Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;

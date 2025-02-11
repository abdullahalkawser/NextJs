"use server";

import bcrypt from "bcryptjs";
import { connectDB } from "./lib/db";



export const register = async (state, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate delay

  console.log("Register function called");

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  // Basic Validation
  if (!name || !email || !password || !confirmPassword) {
    return { error: "All fields are required!" };
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match!" };
  }

  try {
    // Connect to MongoDB
    const db = await connectDB();
    const usersCollection = db.collection("users");

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return { error: "User already exists!" };
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    const newUser = await usersCollection.insertOne({
      name,
      email,
      password: hashedPassword, // Store hashed password
      createdAt: new Date(),
    });


    return { success: "Registration successful! 🎉" };

  } catch (error) {
    console.error("Registration error:", error);
    return { error: "Registration failed. Please try again later." };
  }
};

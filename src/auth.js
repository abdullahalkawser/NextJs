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


///post



export const handle = async (state, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate delay

  console.log("Register function called");

  const name = formData.get("name");
  const title = formData.get("title");
  const description = formData.get("description");

  // Ensure all fields are provided
  if (!name || !title || !description) {
    return { error: "All fields are required!" };
  }

  try {
    // Connect to the database
    const db = await connectDB();

    // Access the 'posts' collection
    const posts = db.collection("posts");

    // Insert a new post document
    const newPost = await posts.insertOne({
      name,
      title,
      description,
      createdAt: new Date(),
    });

    console.log("Post successfully created:", newPost);

    // Return a success response
    return {
      success: true,
      message: 'Post created successfully!',
      
    };
  } catch (error) {
    console.error("Error inserting post:", error);

    // Return an error message
    return {
      error: "An error occurred while creating the post.",
    };
  }
};


// get daata from mongodb


export const getdata = async (state, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate delay

  try {
    const db = await connectDB();
    const posts = db.collection("posts");

    // Fetch posts and convert _id to string
    const fetchedPosts = await posts.find({}).toArray();

    // Convert _id to string for each post
    const postsWithStringIds = fetchedPosts.map(post => ({
      ...post,
      _id: post._id.toString(),  // Convert ObjectId to string
    }));

    console.log("Fetched successfully:", postsWithStringIds);

    return {
      success: true,
      message: 'Fetched successfully!',
      posts: postsWithStringIds,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      error: "An error occurred while fetching the posts.",
    };
  }
};


// delete daata from mongodb
// Delete data from MongoDB (Server-side API handler)
export const handleDelete = async (postId) => {
  try {
    const db = await connectDB();
    const postsCollection = db.collection("posts");

    // Perform the delete operation
    const result = await postsCollection.deleteOne({ _id: new ObjectId(postId) });

    if (result.deletedCount === 1) {
      return { success: "Post deleted successfully!" };
    } else {
      return { error: "Post not found." };
    }
  } catch (error) {
    console.error("Error deleting post:", error);
    return { error: "An error occurred while deleting the post." };
  }
};



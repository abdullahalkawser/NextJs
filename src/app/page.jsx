// PostList Component
"use client"; // Ensure this file is treated as a client component

import { useState, useEffect } from 'react';
import { getdata } from '@/auth';
import { useRouter } from 'next/navigation'; // Correct import for next/navigation

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter(); // Use useRouter here

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getdata();

      if (result.success) {
        setPosts(result.posts); // Set the fetched posts to state
      } else {
        setError(result.error || 'An error occurred.');
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  const handleReadMore = (postId) => {
    // Navigate to the post detail page
    router.push(`/post/${postId}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="animate-spin rounded-full border-t-4 border-white border-solid w-16 h-16"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Our Latest Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {posts.map((post) => (
          <div key={post._id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl hover:opacity-90 hover:border-indigo-400 border-t-4 border-transparent flex flex-col">
            <div className="p-6 flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold text-gray-800 hover:text-indigo-500 transition-colors duration-200">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{post.description}</p>
              <div className="text-gray-500 flex justify-between items-center">
                <span><strong>By:</strong> {post.name}</span>
                <span className="text-xs italic">{new Date(post.createdAt).toLocaleString()}</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-indigo-500 text-white text-center rounded-b-lg transition-all duration-200 hover:bg-indigo-400">
              <button onClick={() => handleReadMore(post._id)} className="px-6 py-3 rounded-full text-lg font-medium">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;

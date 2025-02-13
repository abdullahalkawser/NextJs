"use client";  // Ensure this is here for client-side rendering
import { handle } from '@/auth';
import React, { useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use correct import for next 13+

const Post = () => {
  const [state, action, isLoading] = useActionState(handle, undefined);
  const router = useRouter();  // Initialize the router

  // UseEffect to redirect after successful post creation
  useEffect(() => {
    if (state && state.success) {
      // Redirect to the home page after success
      router.push('/'); // '/' is the home page
    }
  }, [state, router]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">Create a Post</h2>
      <form action={action} className="space-y-6">
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Displaying success or error state */}
        {state && !isLoading && (
          <div className="text-center mt-4">
            <p className="text-green-500">{state.success ? 'Post created successfully!' : 'An error occurred. Please try again.'}</p>
          </div>
        )}

        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-3 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'} text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Post;

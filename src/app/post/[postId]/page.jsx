"use client"; // Ensure this file is treated as a client component

import { useState, useEffect } from 'react';
import { getdata } from '@/auth';
import { use } from 'react'; // Import the `use` hook for unwrapping params

const PostDetail = ({ params }) => {
  const { postId } = use(params); // Use React.use() to unwrap params
  
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!postId) return; // Ensure postId is available

    const fetchPost = async () => {
      try {
        const result = await getdata(postId);
        if (result.success) {
          setPost(result.post);
        } else {
          setError(result.error || 'An error occurred.');
        }
      } catch (err) {
        setError('Failed to fetch post details.');
      }
      setLoading(false);
    };

    fetchPost();
  }, [postId]);

  // Conditional rendering to handle loading, error, or post data
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Ensure post is defined before accessing its properties
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <div>{post.content}</div>
    </div>
  );
};

export default PostDetail;

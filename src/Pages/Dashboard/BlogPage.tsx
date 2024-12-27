import React, { useState, useEffect } from 'react';
import axios from 'axios';
interface Blog {
  id: number;
  title: string;
  content: string;
  date: string;
  authorName: string;
}

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [authorName, setAuthorName] = useState<string>('');
  const [visibleBlogs, setVisibleBlogs] = useState<number>(3);

  // Fetch blogs from localStorage on page load
  useEffect(() => {
    const savedBlogs = localStorage.getItem('blogs');
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs)); // Parse and set blogs from localStorage
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Use the logged-in user's username if no author name is provided
      const finalAuthorName = authorName || localStorage.getItem('username') || 'Anonymous';

      const newBlog: Blog = {
        id: Date.now(), // Unique ID for the blog post
        title,
        content,
        authorName: finalAuthorName,
        date: new Date().toISOString(),
      };

      // Add the new blog to the existing blogs array
      const updatedBlogs = [newBlog, ...blogs];

      // Save the updated blogs array to localStorage
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

      setBlogs(updatedBlogs); // Update the state with new blogs
      setTitle('');
      setContent('');
      setAuthorName('');
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  const loadMoreBlogs = () => {
    setVisibleBlogs((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <div className="text-center py-8 bg-white shadow">
        <h1 className="text-4xl font-semibold mb-2">Share What You Feel</h1>
        <p className="text-lg text-gray-600">Your feelings matter to us. Share your story and connect with others.</p>
      </div>


      <div className="max-w-3xl mx-auto py-6 px-4">
        {/* Blog Form */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-bold mb-4">Write Your Blog</h2>
          <form onSubmit={handleSubmit}>
            {/* Blog Title */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                Blog Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-300"
                placeholder="Enter blog title"
                required
              />
            </div>

            {/* Blog Content */}
            <div className="mb-4">
              <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-300"
                placeholder="Write your thoughts here..."
                rows={5}
                required
              ></textarea>
            </div>

            {/* Author Name */}
            <div className="mb-4">
              <label htmlFor="authorName" className="block text-gray-700 font-medium mb-2">
                Author Name (Optional)
              </label>
              <input
                id="authorName"
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-300"
                placeholder="Enter a name to display as the author"
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Blog List */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Recent Blogs</h2>
          {blogs.length === 0 ? (
            <p className="text-center text-gray-500 italic">No blogs yet. Be the first to share your thoughts!</p>
          ) : (
            blogs.slice(0, visibleBlogs).map((blog) => (
              <div
                key={blog.id}
                className="bg-white p-6 mb-6 rounded shadow hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">{blog.title}</h3>
                <p className="text-gray-700">{blog.content}</p>
                <div className="text-sm text-gray-500 mt-4">
                  Posted by <span className="font-semibold text-gray-800">{blog.authorName}</span> on{' '}
                  {new Date(blog.date).toLocaleString()}
                </div>
              </div>
            ))
          )}
          {blogs.length > visibleBlogs && (
            <div className="text-center mt-6">
              <button
                onClick={loadMoreBlogs}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

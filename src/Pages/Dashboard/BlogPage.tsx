import React, { useState } from 'react';
import axios from 'axios';

interface Blog {
  id: number;
  title: string;
  content: string;
  date: string;
}

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]); // Explicitly define the type
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/blogs', {
        title,
        content,
        date: new Date().toISOString(),
      });

      if (response.status === 200) {
        setBlogs([response.data, ...blogs]); // Add the new blog to the list
        setTitle('');
        setContent('');
      }
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white font-sans">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Write Your Blog</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Blog Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter blog title"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Write your thoughts here..."
              rows={6}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Blogs</h2>
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white p-6 mb-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p className="text-gray-700 mt-2">{blog.content}</p>
              <span className="text-gray-500 text-sm">{new Date(blog.date).toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

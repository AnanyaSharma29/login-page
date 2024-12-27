import React, { useState, useEffect } from 'react';

interface Blog {
  id: number;
  title: string;
  content: string;
  date: string;
  authorName: string;
}

const BlogListPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    // Fetch blogs from localStorage on page load
    const savedBlogs = localStorage.getItem('blogs');
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs)); // Parse and set blogs from localStorage
    }
  }, []);

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-100 to-blue-50">
        <h1 className="text-5xl font-bold mb-4 text-blue-800">Community Blogs</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Explore personal stories, mental health journeys, and more!
        </p>
      </section>

      {/* Blog List Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-100 to-orange-50">
        <h2 className="text-center text-3xl font-bold mb-6 text-orange-600">🌟 Get Inspired by Our Community 🌟</h2>
        <p className="text-center text-lg mb-8 text-gray-600">
          ✨ Dive into uplifting stories and powerful experiences shared by individuals who have overcome challenges and transformed their lives. ✨
        </p>

        <div className="space-y-8">
          {blogs.length === 0 ? (
            <p className="text-center text-gray-500 italic">No blogs yet. Be the first to share your story!</p>
          ) : (
            blogs.map((blog) => (
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
        </div>
      </section>
    </div>
  );
};

export default BlogListPage;

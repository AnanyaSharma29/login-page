import React from 'react';
import { Link } from 'react-router-dom';

type HeaderProps = {
  title: string;
  navLinks: { to: string; label: string }[];
  onLogout?: () => void; // Optional logout handler
};

const UserHeader: React.FC<HeaderProps> = ({ title, navLinks, onLogout }) => {
  return (
    <header className="bg-white shadow-lg dark:bg-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
        <h1 className="text-3xl font-bold text-white-900 hover:text-yellow-400">{title}</h1>
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="text-gray-900 hover:text-blue-500 dark:text-white dark:hover:text-blue-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="bg-red-500 text-white px-6 py-2 rounded-full transition hover:bg-red-600"
          >
            Log Out
          </button>
        </nav>
      </div>
    </header>
  );
};

export default UserHeader;

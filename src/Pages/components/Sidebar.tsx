import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-teal-600">Consultant Dashboard</h1>
      </div>
      <nav className="mt-6">
        <ul>
          {/* Using Link component to navigate between pages */}
          <li className="px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <Link to="/consultant-dashboard">Dashboard</Link>
          </li>
          <li className="px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <Link to="/calendar">Calendar</Link>
          </li>
          <li className="px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <Link to="/clients">Clients</Link>
          </li>
          <li className="px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <Link to="/availability">Availability</Link>
          </li>
          <li className="px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <Link to="/messages">Messages</Link>
          </li>
          <li className="px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <Link to="/settings">Settings</Link>
          </li>
          <li
            className="px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer"
            onClick={onLogout}
          >
            Logout
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

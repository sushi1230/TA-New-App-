import React from 'react';
import { NavLink } from 'react-router-dom';

const sidebarItems = [
  { id: 1, path: '/', label: '1', title: 'Home' },
  { id: 2, path: '/projects', label: '2', title: 'Projects' },
  { id: 3, path: '/tasks', label: '3', title: 'Tasks' },
  { id: 5, path: '/calendar', label: '5', title: 'Calendar' },
  { id: 6, path: '/reports', label: '6', title: 'Reports' },
  { id: 7, path: '/settings', label: '7', title: 'Settings' },
];

const Sidebar = () => {
  return (
    <div className="w-16 border-r border-gray-200 pr-2 space-y-2">
      {sidebarItems.map(({ id, path, label, title }) => (
        <NavLink
          key={id}
          to={path}
          className={({ isActive }) =>
            `w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 ${
              isActive ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'
            }`
          }
          title={title}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;

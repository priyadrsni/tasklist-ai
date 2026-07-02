import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || (path === '/dashboard' && location.pathname === '/');
  };

  return (
    <aside className={`bg-mauve-800 pt-5 pb-5 text-white ${className}`}>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="block pl-5 mb-5 rounded text-lg text-left font-bold">
              Task List AI
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={`block pl-5 pb-2 pt-2 mb-2 hover:bg-mauve-700 rounded text-sm text-left ${
                isActive('/dashboard') ? 'bg-mauve-700 font-semibold' : ''
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/meetings"
              className={`block pl-5 pb-2 pt-2 mb-2 hover:bg-mauve-700 rounded text-sm text-left ${
                isActive('/meetings') ? 'bg-mauve-700 font-semibold' : ''
              }`}
            >
              Meetings
            </Link>
          </li>
          <li>
            <Link
              to="/tasks"
              className={`block pl-5 pb-2 pt-2 mb-2 hover:bg-mauve-700 rounded text-sm text-left ${
                isActive('/tasks') ? 'bg-mauve-700 font-semibold' : ''
              }`}
            >
              Tasks
            </Link>
          </li>

        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

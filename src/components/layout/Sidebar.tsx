import React from 'react';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  return (
    <aside className={`bg-gray-800 text-white p-4 ${className}`}>
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
              Meetings
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
              Tasks
            </a>
          </li>

        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface AppLayoutProps {
  children: ReactNode;
  title?: string;
  showSidebar?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({ 
  children, 
  title,
  showSidebar = true 
}) => {
  return (
    <div className="min-h-screen flex">
      {showSidebar && (
        <Sidebar className="w-64 flex-shrink-0" />
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={title} />
        <main className="flex-1 overflow-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

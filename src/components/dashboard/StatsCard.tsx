import React, { ReactNode } from "react";
import { CalendarDays, Check, ClipboardCheck, TriangleAlert } from "lucide-react";

type DashboardData = {
  totalMeetings: number;
  openTasks: number;
  completedTasks: number;
  dueThisWeek: number;
};

type Meeting = {
  id: string;
  title: string;
  createdAt: number;
};

type Task = {
  id: string;
  title: string;
  status: string;
};

type StatsCardProps = {
  mockDashboardData: DashboardData;
  recentMeetings: Meeting[];
  recentTasks: Task[];
}

const StatsCard: React.FC<StatsCardProps> = ({ mockDashboardData, recentMeetings, recentTasks }) => {
  const { totalMeetings, openTasks, completedTasks, dueThisWeek } = mockDashboardData;

  const formatDate = (epochTimestamp: number) => {
    const date = new Date(epochTimestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="flex flex-col min-h-100 gap-5 text-gray-700">
      <div className="grid grid-cols-4 gap-4 my-2">
      <div className="flex flex-row justify-between bg-white rounded-xl p-8 shadow-sm text-sm">
        <div className="flex flex-row items-center justify-start gap-[5%] text-md flex-1"><CalendarDays size={30}/> Total Meetings </div>
        <span className="pl-10 text-lg">{totalMeetings}</span>
      </div>
      <div className="flex flex-row justify-between bg-white rounded-xl p-8 shadow-sm text-sm">
        <div className="flex flex-row items-center justify-start gap-[5%] text-md flex-1"><ClipboardCheck size={30}/> Open </div>
        <span className="pl-10 text-lg">{openTasks}</span>
      </div>
      <div className="flex flex-row justify-between bg-white rounded-xl p-8 shadow-sm text-sm">
        <div className="flex flex-row items-center justify-start gap-[5%] text-md flex-1"><Check size={30}/> Completed </div>
        <span className="pl-10 text-lg">{completedTasks}</span>
      </div>
      <div className="flex flex-row justify-between bg-white rounded-xl p-8 shadow-sm text-sm">
        <div className="flex flex-row items-center justify-start gap-[5%] text-md flex-1"><TriangleAlert size={30}/> Due </div>
        <span className="pl-10 text-lg">{dueThisWeek}</span>
      </div>
    </div>
    <div className="flex-1 grid grid-cols-2 gap-6">
      <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <span className="font-semibold text-md">Recent Meetings</span>
          <a href="/meetings" className="text-sm font-semibold text-mauve-600 hover:text-mauve-800">View All</a>
        </div>
        <div className="text-left space-y-4 text-sm flex-1 overflow-auto">
          {recentMeetings.map((item) => (
            <div key={item.id} className="flex flex-row justify-between">
              <div>{item.title}</div>
              <div className="text-gray-500">{formatDate(item.createdAt)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <span className="font-semibold text-md">Recent Tasks</span>
          <a href="/tasks" className="text-sm font-semibold text-mauve-600 hover:text-mauve-800">View All</a>
        </div>
        <div className="text-left space-y-4 text-sm flex-1 overflow-auto">
          {recentTasks.map((item) => (
            <div className="flex flex-row justify-between">
              <div key={item.id}>{item.title}</div>
              <div>{item.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
};

export default StatsCard;

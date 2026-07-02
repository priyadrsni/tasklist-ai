import StatsCard from "../../components/dashboard/StatsCard";
import AppLayout from "../../components/layout/AppLayout";
import { mockDashboardData, recentMeetings, recentTasks } from "../../utils/mockData";

export default function DashboardPage() {
  const currentUser = "Priya"; // This would come from auth context in a real app
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good Morning" : currentHour < 18 ? "Good Afternoon" : "Good Evening";

  return <div>
    <AppLayout title={`${greeting}, ${currentUser}! 👋`}>
      <StatsCard
        mockDashboardData={mockDashboardData}
        recentMeetings={recentMeetings}
        recentTasks={recentTasks}
      />
    </AppLayout>
  </div>;
}

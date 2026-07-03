import { useEffect, useState } from "react";
import { getDashboardSummary } from "../../services/dashboardService";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsGrid from "../../components/dashboard/StatsGrid";
import TasksCard from "../../components/dashboard/TasksCard";
import ScheduleCard from "../../components/dashboard/ScheduleCard";
import "../../components/dashboard/dashboard.css";

function Dashboard() {
    const [dashboard, setDashboard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadDashboard() {
            try {
                const data = await getDashboardSummary();
                setDashboard(data);
            } catch (err) {
                setError("Could not load dashboard data.");
            } finally {
                setLoading(false);
            }
        }

        loadDashboard();
    }, []);

    if (loading) {
        return <div className="page-state">Loading dashboard...</div>;
    }

    if (error) {
        return <div className="page-state page-state--error">{error}</div>;
    }

    return (
        <section className="dashboard-page">
            <DashboardHeader dashboard={dashboard} />
            <StatsGrid stats={dashboard.stats} />

            <div className="dashboard-grid">
                <TasksCard tasks={dashboard.today_tasks} />
                <ScheduleCard schedule={dashboard.upcoming_schedule} />
            </div>
        </section>
    );
}

export default Dashboard;
const statLabels = [
    { key: "departments", label: "Departments" },
    { key: "employees", label: "People" },
    { key: "tasks", label: "Tasks" },
    { key: "resources", label: "Resources" },
    { key: "faq_items", label: "FAQ items" }
];

function StatsGrid({ stats }) {
    return (
        <div className="stats-grid">
            {statLabels.map((item) => (
                <div className="stat-card" key={item.key}>
                    <span>{item.label}</span>
                    <strong>{stats[item.key]}</strong>
                </div>
            ))}
        </div>
    );
}

export default StatsGrid;
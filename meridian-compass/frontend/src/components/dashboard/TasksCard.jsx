function TasksCard({ tasks }) {
    return (
        <div className="dashboard-card">
            <div className="dashboard-card__header">
                <h2>Today's priorities</h2>
                <span>{tasks.length} tasks</span>
            </div>

            <div className="task-list">
                {tasks.map((task) => (
                    <div className="task-item" key={task.id}>
                        <div className="task-check">✓</div>
                        <div>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TasksCard;
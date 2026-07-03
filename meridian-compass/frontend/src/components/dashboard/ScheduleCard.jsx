function ScheduleCard({ schedule }) {
    return (
        <div className="dashboard-card">
            <div className="dashboard-card__header">
                <h2>Upcoming schedule</h2>
                <span>Next steps</span>
            </div>

            <div className="schedule-list">
                {schedule.map((item) => (
                    <div className="schedule-item" key={item.id}>
                        <div className="schedule-day">Day {item.day}</div>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.time} · {item.location} · {item.work_mode}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ScheduleCard;
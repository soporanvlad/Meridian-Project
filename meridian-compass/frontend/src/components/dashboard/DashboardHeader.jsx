function DashboardHeader({ dashboard }) {
    return (
        <div className="dashboard-header">
            <div>
                <p className="eyebrow">New employee hub</p>

                <h1>{dashboard.welcome_message}</h1>

                <p className="dashboard-header__subtitle">
                    Today is day {dashboard.current_day} of your onboarding journey.
                </p>
            </div>

            <div className="progress-card">
                <span>First month progress</span>

                <strong>{dashboard.progress_percentage}%</strong>

                <div className="progress-bar">
                    <div
                        className="progress-bar__fill"
                        style={{
                            width: `${dashboard.progress_percentage}%`,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default DashboardHeader;
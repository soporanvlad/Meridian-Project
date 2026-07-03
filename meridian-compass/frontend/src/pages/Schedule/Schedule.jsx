import { useEffect, useState } from "react";
import { getSchedule } from "../../services/onboardingService";
import "./Schedule.css";

function Schedule() {
    const [schedule, setSchedule] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadSchedule() {
            try {
                const data = await getSchedule();
                setSchedule(data);
            } catch (err) {
                setError("Could not load onboarding schedule.");
            } finally {
                setLoading(false);
            }
        }

        loadSchedule();
    }, []);

    if (loading) {
        return <div className="page-state">Loading schedule...</div>;
    }

    if (error) {
        return <div className="page-state page-state--error">{error}</div>;
    }

    return (
        <section className="schedule-page">
            <div className="page-header">
                <p className="eyebrow">First month</p>
                <h1>Onboarding Schedule</h1>
                <p>
                    Follow your onboarding timeline and upcoming activities.
                </p>
            </div>

            <div className="timeline">
                {schedule.map((item) => (
                    <article className="timeline-card" key={item.id}>
                        <div className="timeline-day">
                            Day {item.day}
                        </div>

                        <div className="timeline-content">
                            <h2>{item.title}</h2>

                            <p>{item.description}</p>

                            <div className="timeline-meta">
                                <span>🕒 {item.time}</span>
                                <span>📍 {item.location}</span>
                                <span>💻 {item.work_mode}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Schedule;
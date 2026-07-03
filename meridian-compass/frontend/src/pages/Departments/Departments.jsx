import { useEffect, useState } from "react";
import { getDepartments } from "../../services/departmentService";
import "./Departments.css";

function Departments() {
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadDepartments() {
            try {
                const data = await getDepartments();
                setDepartments(data);
            } catch (err) {
                setError("Could not load departments.");
            } finally {
                setLoading(false);
            }
        }

        loadDepartments();
    }, []);

    if (loading) {
        return <div className="page-state">Loading departments...</div>;
    }

    if (error) {
        return <div className="page-state page-state--error">{error}</div>;
    }

    return (
        <section className="departments-page">
            <div className="departments-header">
                <p className="eyebrow">Company structure</p>
                <h1>Meet Meridian's departments</h1>
                <p>
                    A quick overview of how Meridian is organized and where a new employee
                    can find the right people.
                </p>
            </div>

            <div className="departments-grid">
                {departments.map((department) => (
                    <article className="department-card" key={department.id}>
                        <div className="department-card__icon">
                            {department.name.charAt(0)}
                        </div>

                        <div>
                            <h2>{department.name}</h2>
                            <p>{department.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Departments;
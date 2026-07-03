import { useEffect, useState } from "react";
import { getEmployees } from "../../services/employeeService";
import { getDepartments } from "../../services/departmentService";
import "./Employees.css";

function Employees() {
    const [employees, setEmployees] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadInitialData();
    }, []);

    useEffect(() => {
        loadEmployees();
    }, [selectedDepartment]);

    async function loadInitialData() {
        try {
            const [employeesData, departmentsData] = await Promise.all([
                getEmployees(),
                getDepartments()
            ]);

            setEmployees(employeesData);
            setDepartments(departmentsData);
        } catch (err) {
            setError("Could not load team data.");
        } finally {
            setLoading(false);
        }
    }

    async function loadEmployees() {
        try {
            const params = {};

            if (selectedDepartment) {
                params.department_id = selectedDepartment;
            }

            const data = await getEmployees(params);
            setEmployees(data);
        } catch (err) {
            setError("Could not filter employees.");
        }
    }

    async function handleSearch(event) {
        event.preventDefault();

        try {
            const params = {};

            if (selectedDepartment) {
                params.department_id = selectedDepartment;
            }

            if (search.trim()) {
                params.search = search.trim();
            }

            const data = await getEmployees(params);
            setEmployees(data);
        } catch (err) {
            setError("Could not search employees.");
        }
    }

    if (loading) {
        return <div className="page-state">Loading team...</div>;
    }

    if (error) {
        return <div className="page-state page-state--error">{error}</div>;
    }

    return (
        <section className="employees-page">
            <div className="employees-header">
                <div>
                    <p className="eyebrow">People directory</p>
                    <h1>Find the people who can help you</h1>
                    <p>
                        New employees can quickly discover their manager, buddy and
                        department contacts during the first month.
                    </p>
                </div>
            </div>

            <div className="employees-toolbar">
                <form onSubmit={handleSearch} className="employees-search">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>

                <select
                    value={selectedDepartment}
                    onChange={(event) => setSelectedDepartment(event.target.value)}
                >
                    <option value="">All departments</option>
                    {departments.map((department) => (
                        <option key={department.id} value={department.id}>
                            {department.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="employees-grid">
                {employees.map((employee) => {
                    const department = departments.find(
                        (item) => item.id === employee.department_id
                    );

                    return (
                        <article className="employee-card" key={employee.id}>
                            <div className="employee-card__avatar">
                                {employee.full_name
                                    .split(" ")
                                    .map((part) => part[0])
                                    .join("")
                                    .slice(0, 2)}
                            </div>

                            <div className="employee-card__content">
                                <div>
                                    <h2>{employee.full_name}</h2>
                                    <span>{employee.position}</span>
                                </div>

                                <p>{employee.bio}</p>

                                <div className="employee-card__meta">
                                    <span>{department?.name || "General"}</span>
                                    <span>{employee.office_days}</span>
                                </div>

                                <a href={`mailto:${employee.email}`}>
                                    {employee.email}
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default Employees;
import { useState } from "react";
import {
    createEmployee,
    createResource,
    createFAQ,
    createTask
} from "../../services/adminService";
import "./Admin.css";

const initialEmployee = {
    full_name: "",
    email: "",
    position: "",
    bio: "",
    office_days: "",
    department_id: 1
};

const initialResource = {
    title: "",
    description: "",
    url: "",
    department_id: 1
};

const initialFAQ = {
    question: "",
    answer: "",
    department_id: 1
};

const initialTask = {
    title: "",
    description: "",
    category: "",
    day: 1,
    is_required: true,
    department_id: 1
};

function Admin() {
    const [employee, setEmployee] = useState(initialEmployee);
    const [resource, setResource] = useState(initialResource);
    const [faq, setFaq] = useState(initialFAQ);
    const [task, setTask] = useState(initialTask);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event, type) {
        event.preventDefault();
        setMessage("");
        setError("");

        try {
            if (type === "employee") {
                await createEmployee({
                    ...employee,
                    department_id: Number(employee.department_id)
                });
                setEmployee(initialEmployee);
            }

            if (type === "resource") {
                await createResource({
                    ...resource,
                    department_id: Number(resource.department_id)
                });
                setResource(initialResource);
            }

            if (type === "faq") {
                await createFAQ({
                    ...faq,
                    department_id: Number(faq.department_id)
                });
                setFaq(initialFAQ);
            }

            if (type === "task") {
                await createTask({
                    ...task,
                    day: Number(task.day),
                    department_id: Number(task.department_id)
                });
                setTask(initialTask);
            }

            setMessage("Item created successfully.");
        } catch (err) {
            setError(
                err.response?.data?.detail ||
                err.response?.data?.message ||
                "Could not create item."
            );
        }
    }

    return (
        <section className="admin-page">
            <div className="page-header">
                <p className="eyebrow">HR administration</p>
                <h1>Manage onboarding content</h1>
                <p>
                    Add people, resources, questions and tasks that help new employees
                    navigate their first month at Meridian.
                </p>
            </div>

            {message && <div className="admin-alert admin-alert--success">{message}</div>}
            {error && <div className="admin-alert admin-alert--error">{error}</div>}

            <div className="admin-grid">
                <form
                    className="admin-form"
                    onSubmit={(event) => handleSubmit(event, "employee")}
                >
                    <h2>Add employee</h2>

                    <input
                        placeholder="Full name"
                        value={employee.full_name}
                        onChange={(e) =>
                            setEmployee({ ...employee, full_name: e.target.value })
                        }
                        required
                    />

                    <input
                        placeholder="Email"
                        type="email"
                        value={employee.email}
                        onChange={(e) =>
                            setEmployee({ ...employee, email: e.target.value })
                        }
                        required
                    />

                    <input
                        placeholder="Position"
                        value={employee.position}
                        onChange={(e) =>
                            setEmployee({ ...employee, position: e.target.value })
                        }
                    />

                    <input
                        placeholder="Office days"
                        value={employee.office_days}
                        onChange={(e) =>
                            setEmployee({ ...employee, office_days: e.target.value })
                        }
                    />

                    <textarea
                        placeholder="Bio"
                        value={employee.bio}
                        onChange={(e) =>
                            setEmployee({ ...employee, bio: e.target.value })
                        }
                    />

                    <input
                        placeholder="Department ID"
                        type="number"
                        min="1"
                        value={employee.department_id}
                        onChange={(e) =>
                            setEmployee({ ...employee, department_id: e.target.value })
                        }
                    />

                    <button type="submit">Create employee</button>
                </form>

                <form
                    className="admin-form"
                    onSubmit={(event) => handleSubmit(event, "resource")}
                >
                    <h2>Add resource</h2>

                    <input
                        placeholder="Title"
                        value={resource.title}
                        onChange={(e) =>
                            setResource({ ...resource, title: e.target.value })
                        }
                        required
                    />

                    <input
                        placeholder="URL"
                        value={resource.url}
                        onChange={(e) =>
                            setResource({ ...resource, url: e.target.value })
                        }
                    />

                    <textarea
                        placeholder="Description"
                        value={resource.description}
                        onChange={(e) =>
                            setResource({ ...resource, description: e.target.value })
                        }
                    />

                    <input
                        placeholder="Department ID"
                        type="number"
                        min="1"
                        value={resource.department_id}
                        onChange={(e) =>
                            setResource({ ...resource, department_id: e.target.value })
                        }
                    />

                    <button type="submit">Create resource</button>
                </form>

                <form
                    className="admin-form"
                    onSubmit={(event) => handleSubmit(event, "faq")}
                >
                    <h2>Add FAQ</h2>

                    <input
                        placeholder="Question"
                        value={faq.question}
                        onChange={(e) =>
                            setFaq({ ...faq, question: e.target.value })
                        }
                        required
                    />

                    <textarea
                        placeholder="Answer"
                        value={faq.answer}
                        onChange={(e) =>
                            setFaq({ ...faq, answer: e.target.value })
                        }
                        required
                    />

                    <input
                        placeholder="Department ID"
                        type="number"
                        min="1"
                        value={faq.department_id}
                        onChange={(e) =>
                            setFaq({ ...faq, department_id: e.target.value })
                        }
                    />

                    <button type="submit">Create FAQ</button>
                </form>

                <form
                    className="admin-form"
                    onSubmit={(event) => handleSubmit(event, "task")}
                >
                    <h2>Add task</h2>

                    <input
                        placeholder="Title"
                        value={task.title}
                        onChange={(e) =>
                            setTask({ ...task, title: e.target.value })
                        }
                        required
                    />

                    <input
                        placeholder="Category"
                        value={task.category}
                        onChange={(e) =>
                            setTask({ ...task, category: e.target.value })
                        }
                    />

                    <input
                        placeholder="Day"
                        type="number"
                        min="1"
                        value={task.day}
                        onChange={(e) =>
                            setTask({ ...task, day: e.target.value })
                        }
                    />

                    <textarea
                        placeholder="Description"
                        value={task.description}
                        onChange={(e) =>
                            setTask({ ...task, description: e.target.value })
                        }
                    />

                    <input
                        placeholder="Department ID"
                        type="number"
                        min="1"
                        value={task.department_id}
                        onChange={(e) =>
                            setTask({ ...task, department_id: e.target.value })
                        }
                    />

                    <label className="admin-checkbox">
                        <input
                            type="checkbox"
                            checked={task.is_required}
                            onChange={(e) =>
                                setTask({ ...task, is_required: e.target.checked })
                            }
                        />
                        Required task
                    </label>

                    <button type="submit">Create task</button>
                </form>
            </div>
        </section>
    );
}

export default Admin;
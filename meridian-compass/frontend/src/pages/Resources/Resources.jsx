import { useEffect, useState } from "react";
import { getResources } from "../../services/onboardingService";
import "./Resources.css";

function getResourceIcon(title) {
    const text = title.toLowerCase();

    if (text.includes("slack")) return "💬";
    if (text.includes("meet")) return "🎥";
    if (text.includes("github")) return "🐙";
    if (text.includes("jira")) return "📌";
    if (text.includes("handbook")) return "📘";
    if (text.includes("engineering")) return "💻";

    return "🔗";
}

function Resources() {
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadResources() {
            try {
                const data = await getResources();
                setResources(data);
            } finally {
                setLoading(false);
            }
        }

        loadResources();
    }, []);

    if (loading) {
        return <div className="page-state">Loading resources...</div>;
    }

    return (
        <section className="resources-page">
            <div className="page-header">
                <p className="eyebrow">Knowledge base</p>
                <h1>Resources</h1>
                <p>Useful links and documentation for your first weeks.</p>
            </div>

            <div className="resources-grid">
                {resources.map((resource) => (
                    <div className="resource-card" key={resource.id}>
                        <div className="resource-card__icon">
                            {getResourceIcon(resource.title)}
                        </div>

                        <h2>{resource.title}</h2>

                        <p>{resource.description}</p>

                        <a
                            href={resource.url || "#"}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(event) => {
                                if (!resource.url || resource.url.includes("example.com")) {
                                    event.preventDefault();
                                    alert(`${resource.title}\n\n${resource.description}`);
                                }
                            }}
                        >
                            Open Resource →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Resources;
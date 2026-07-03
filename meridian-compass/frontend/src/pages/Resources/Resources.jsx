import { useEffect, useState } from "react";
import { getResources } from "../../services/onboardingService";
import "./Resources.css";

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
                        <h2>{resource.title}</h2>

                        <p>{resource.description}</p>

                        <a
                            href={resource.url}
                            target="_blank"
                            rel="noreferrer"
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
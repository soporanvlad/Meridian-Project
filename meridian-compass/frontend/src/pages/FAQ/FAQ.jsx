import { useEffect, useState } from "react";
import { getFAQ } from "../../services/onboardingService";
import "./FAQ.css";

function FAQ() {
    const [faq, setFaq] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadFaq();
    }, []);

    async function loadFaq(query = "") {
        const data = await getFAQ(
            query
                ? {
                      search: query
                  }
                : {}
        );

        setFaq(data);
    }

    function handleSearch(e) {
        const value = e.target.value;

        setSearch(value);

        loadFaq(value);
    }

    return (
        <section className="faq-page">
            <div className="page-header">
                <p className="eyebrow">Help center</p>
                <h1>Frequently Asked Questions</h1>
            </div>

            <input
                className="faq-search"
                placeholder="Search..."
                value={search}
                onChange={handleSearch}
            />

            <div className="faq-list">
                {faq.map((item) => (
                    <div
                        className="faq-item"
                        key={item.id}
                    >
                        <h3>{item.question}</h3>

                        <p>{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQ;
# DECISIONS

# Product decisions

The main goal was to reduce uncertainty during the onboarding process.

I prioritized features that answer the most common questions a new employee has during the first weeks:

- onboarding dashboard;
- department overview;
- employee directory;
- onboarding resources;
- FAQ;
- onboarding schedule;
- simple administration interface.

Authentication exists in the backend but is not part of the frontend workflow because the application currently focuses on demonstrating the onboarding experience rather than user management.

Notifications, messaging and document uploads were intentionally left out of scope because they require considerably more infrastructure while providing less value for the assignment.

---

# Technical decisions

The backend was implemented using FastAPI because it provides excellent performance, automatic API documentation and integrates well with SQLAlchemy.

SQLite was chosen because it requires no external setup and simplifies evaluation.

React with Vite was selected for the frontend because it offers a lightweight development environment and component-based architecture.

The database was normalized into separate entities for:

- Departments
- Employees
- Resources
- FAQ
- Tasks

This structure keeps the application extensible while remaining easy to understand.

---

# UX decisions

The application opens directly into the dashboard to minimize friction.

Navigation is always visible through the left sidebar.

Every page follows the same visual language to reduce cognitive load.

The interface was designed for simplicity rather than feature density.

No formal usability testing was performed, although the interface was continuously refined during development to improve consistency and readability.
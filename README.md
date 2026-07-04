# Meridian Compass

Meridian Compass is a full-stack onboarding web application designed to simplify the first month of a new employee at Meridian.

The application centralizes onboarding information such as departments, colleagues, resources, FAQs and onboarding tasks into a single platform, reducing uncertainty during the first weeks at the company.

---

# Project Goal

Starting a new job can be overwhelming.

New employees often receive very little information before their first day and must quickly learn:

- who works in the company;
- how departments are organized;
- where important documentation is located;
- what they need to complete during onboarding;
- who they should contact.

Meridian Compass was built to solve this problem.

---

# Features

## Dashboard

- onboarding overview
- onboarding progress
- company statistics
- today's onboarding tasks
- upcoming schedule

## Departments

- company departments
- department descriptions

## Team Directory

- employee list
- search employees
- filter by department

## Resources

- onboarding documentation
- useful company links

## FAQ

- frequently asked questions
- instant search

## Schedule

- onboarding timeline
- meetings
- hybrid work schedule

## Administration

HR can create:

- employees
- resources
- FAQ entries
- onboarding tasks

---

# Technology Stack

## Backend

- FastAPI
- SQLAlchemy
- SQLite
- Pydantic
- JWT Authentication
- Passlib

## Frontend

- React
- Vite
- Axios
- React Router

---

# Project Structure

```
Meridian-Project
│
├── README.md
├── ASSUMPTIONS.md
├── DECISIONS.md
├── WHAT_I_WOULD_DO_NEXT.md
├── REFLECTION.md
│
└── meridian-compass
    │
    ├── backend
    │
    │   ├── app
    │   ├── database
    │   ├── models
    │   ├── routers
    │   ├── schemas
    │   ├── services
    │   └── main.py
    │
    └── frontend
        │
        ├── src
        ├── components
        ├── pages
        ├── services
        └── App.jsx
```

---

# Database

The application uses SQLite.

Main entities:

- Departments
- Employees
- Resources
- FAQ
- Tasks

Relationships:

- one department has many employees
- one department has many resources
- one department has many FAQ entries
- one department has many onboarding tasks

---

# Running the Application

## Backend

```
cd meridian-compass/backend

python -m venv venv

source venv/bin/activate

pip install -r requirements.txt

python -m uvicorn app.main:app --reload
```

Swagger:

```
http://127.0.0.1:8000/docs
```

---

## Frontend

```
cd meridian-compass/frontend

npm install

npm run dev
```

Application:

```
http://localhost:5173
```

---

# Authentication

Authentication endpoints are implemented in the backend.

For the purpose of this assignment, the frontend opens directly into the onboarding application to keep the onboarding experience simple and focused.

---

# Design Decisions

The application prioritizes simplicity.

Instead of implementing every possible feature, the focus was placed on solving the most common onboarding problems:

- finding people;
- understanding departments;
- accessing documentation;
- following onboarding tasks;
- answering common questions.

Additional design decisions are documented in:

- DECISIONS.md
- ASSUMPTIONS.md
- WHAT_I_WOULD_DO_NEXT.md
- REFLECTION.md

---

# Future Improvements

Some features intentionally remain outside the current scope:

- complete authentication flow
- role-based permissions
- onboarding progress tracking
- notifications
- calendar integration
- profile pictures
- document uploads

More details are available in:

WHAT_I_WOULD_DO_NEXT.md

---

# Author

Vlad Soporan

Technical Exercise – Meridian Internship
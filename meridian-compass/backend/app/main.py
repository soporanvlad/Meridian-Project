from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.init_db import init_database
from app.api.routes import auth, departments, employees, onboarding, dashboard, admin
from app.core.config import settings
from app.core.exceptions import register_exception_handlers

app = FastAPI(
    title=settings.app_name,
    version=settings.version,
    description="Backend API for the Meridian Compass onboarding platform.",
    contact={
        "name": "First Name Last Name"
    },
    openapi_tags=[
        {"name": "Authentication", "description": "Authentication endpoints"},
        {"name": "Dashboard", "description": "Dashboard summary"},
        {"name": "Departments", "description": "Departments"},
        {"name": "Employees", "description": "Employees"},
        {"name": "Onboarding", "description": "Onboarding resources"},
        {"name": "Admin", "description": "Administration endpoints"}
    ]
)

register_exception_handlers(app)

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

init_database()
app.include_router(auth.router)
app.include_router(departments.router)
app.include_router(employees.router)
app.include_router(onboarding.router)
app.include_router(dashboard.router)
app.include_router(admin.router)

@app.get("/")
def root():
    return {
        "message": settings.app_name
    }

@app.get("/api")
def api_info():
    return {
        "name": "Meridian Compass API",
        "version": "1.0.0",
        "status": "running",
        "documentation": "/docs"
    }
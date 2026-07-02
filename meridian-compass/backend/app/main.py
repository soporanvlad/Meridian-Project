from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.init_db import init_database
from app.api.routes import auth, departments, employees, onboarding, dashboard
from app.core.config import settings

app = FastAPI(
    title=settings.app_name,
    version=settings.version
)

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

@app.get("/")
def root():
    return {
        "message": settings.app_name
    }
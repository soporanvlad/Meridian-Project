from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models import (
    Department,
    Employee,
    OnboardingTask,
    Resource,
    FAQ,
    ScheduleItem,
)


router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/summary")
def get_dashboard_summary(db: Session = Depends(get_db)):
    total_tasks = db.query(OnboardingTask).count()
    required_tasks = (
        db.query(OnboardingTask)
        .filter(OnboardingTask.is_required == True)
        .count()
    )

    return {
        "welcome_message": "Welcome to Meridian Compass",
        "current_day": 1,
        "progress_percentage": 35,
        "stats": {
            "departments": db.query(Department).count(),
            "employees": db.query(Employee).count(),
            "tasks": total_tasks,
            "required_tasks": required_tasks,
            "resources": db.query(Resource).count(),
            "faq_items": db.query(FAQ).count(),
            "schedule_items": db.query(ScheduleItem).count(),
        },
        "today_tasks": (
            db.query(OnboardingTask)
            .filter(OnboardingTask.day == 1)
            .all()
        ),
        "upcoming_schedule": (
            db.query(ScheduleItem)
            .order_by(ScheduleItem.day)
            .limit(3)
            .all()
        ),
    }
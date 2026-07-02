from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models import OnboardingTask, Resource, FAQ, ScheduleItem
from app.schemas import (
    OnboardingTaskResponse,
    ResourceResponse,
    FAQResponse,
    ScheduleItemResponse,
)

router = APIRouter(
    prefix="/onboarding",
    tags=["Onboarding"]
)


@router.get("/tasks", response_model=List[OnboardingTaskResponse])
def get_tasks(db: Session = Depends(get_db)):
    return (
        db.query(OnboardingTask)
        .order_by(OnboardingTask.day)
        .all()
    )


@router.get("/resources", response_model=List[ResourceResponse])
def get_resources(db: Session = Depends(get_db)):
    return db.query(Resource).all()


@router.get("/faq", response_model=List[FAQResponse])
def get_faq(db: Session = Depends(get_db)):
    return db.query(FAQ).all()


@router.get("/schedule", response_model=List[ScheduleItemResponse])
def get_schedule(db: Session = Depends(get_db)):
    return (
        db.query(ScheduleItem)
        .order_by(ScheduleItem.day)
        .all()
    )
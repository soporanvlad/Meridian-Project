from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.database.database import Base


class Department(Base):
    __tablename__ = "departments"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String, unique=True, nullable=False)

    description = Column(String)

    employees = relationship(
    "Employee",
    back_populates="department",
    cascade="all, delete"
    )

    onboarding_tasks = relationship(
    "OnboardingTask",
    back_populates="department",
    cascade="all, delete"
    )

    resources = relationship(
    "Resource",
    back_populates="department",
    cascade="all, delete"
    )

    faqs = relationship(
    "FAQ",
    back_populates="department",
    cascade="all, delete"
    )

    schedule_items = relationship(
    "ScheduleItem",
    back_populates="department",
    cascade="all, delete"
    )
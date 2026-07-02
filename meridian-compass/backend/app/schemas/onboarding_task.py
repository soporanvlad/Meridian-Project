from pydantic import BaseModel
from typing import Optional


class OnboardingTaskBase(BaseModel):
    title: str
    description: Optional[str] = None
    category: Optional[str] = None
    day: Optional[int] = None
    is_required: bool = True
    department_id: Optional[int] = None


class OnboardingTaskCreate(OnboardingTaskBase):
    pass


class OnboardingTaskResponse(OnboardingTaskBase):
    id: int

    class Config:
        from_attributes = True
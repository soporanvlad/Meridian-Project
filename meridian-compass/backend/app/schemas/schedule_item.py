from pydantic import BaseModel
from typing import Optional


class ScheduleItemBase(BaseModel):
    title: str
    description: Optional[str] = None
    day: int
    time: Optional[str] = None
    location: Optional[str] = None
    work_mode: Optional[str] = None
    department_id: Optional[int] = None


class ScheduleItemCreate(ScheduleItemBase):
    pass


class ScheduleItemResponse(ScheduleItemBase):
    id: int

    class Config:
        from_attributes = True
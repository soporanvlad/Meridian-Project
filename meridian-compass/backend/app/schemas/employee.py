from pydantic import BaseModel
from typing import Optional


class EmployeeBase(BaseModel):
    full_name: str
    email: Optional[str] = None
    position: Optional[str] = None
    bio: Optional[str] = None
    office_days: Optional[str] = None
    department_id: int


class EmployeeCreate(EmployeeBase):
    pass


class EmployeeResponse(EmployeeBase):
    id: int

    class Config:
        from_attributes = True
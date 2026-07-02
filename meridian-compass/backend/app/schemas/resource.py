from pydantic import BaseModel
from typing import Optional


class ResourceBase(BaseModel):
    title: str
    description: Optional[str] = None
    url: Optional[str] = None
    department_id: Optional[int] = None


class ResourceCreate(ResourceBase):
    pass


class ResourceResponse(ResourceBase):
    id: int

    class Config:
        from_attributes = True
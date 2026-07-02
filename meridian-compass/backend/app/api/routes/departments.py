from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.database.database import get_db
from app.models import Department
from app.schemas import DepartmentResponse


router = APIRouter(
    prefix="/departments",
    tags=["Departments"]
)


@router.get("/", response_model=List[DepartmentResponse])
def get_departments(db: Session = Depends(get_db)):
    return db.query(Department).all()
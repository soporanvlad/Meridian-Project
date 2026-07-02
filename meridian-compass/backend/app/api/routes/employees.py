from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List, Optional
from app.database.database import get_db
from app.models import Employee
from app.schemas import EmployeeResponse


router = APIRouter(
    prefix="/employees",
    tags=["Employees"]
)


@router.get("/", response_model=List[EmployeeResponse])
def get_employees(
    department_id: Optional[int] = None,
    db: Session = Depends(get_db)
):
    query = db.query(Employee)

    if department_id is not None:
        query = query.filter(Employee.department_id == department_id)

    return query.all()
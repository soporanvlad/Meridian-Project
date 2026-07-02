from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models import (
    Department,
    Employee,
    Resource,
    FAQ,
    OnboardingTask,
)
from app.schemas import (
    EmployeeCreate,
    ResourceCreate,
    FAQCreate,
    OnboardingTaskCreate,
    EmployeeResponse,
    ResourceResponse,
    FAQResponse,
    OnboardingTaskResponse,
)

router = APIRouter(
    prefix="/admin",
    tags=["Admin"]
)


def ensure_department_exists(db: Session, department_id: int | None):
    if department_id is None:
        return

    department = (
        db.query(Department)
        .filter(Department.id == department_id)
        .first()
    )

    if not department:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Department does not exist"
        )


@router.post("/employees", response_model=EmployeeResponse)
def create_employee(
    employee: EmployeeCreate,
    db: Session = Depends(get_db)
):
    ensure_department_exists(db, employee.department_id)

    existing_employee = (
        db.query(Employee)
        .filter(Employee.email == employee.email)
        .first()
    )

    if existing_employee:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Employee with this email already exists"
        )

    new_employee = Employee(**employee.model_dump())

    db.add(new_employee)
    db.commit()
    db.refresh(new_employee)

    return new_employee


@router.post("/resources", response_model=ResourceResponse)
def create_resource(
    resource: ResourceCreate,
    db: Session = Depends(get_db)
):
    ensure_department_exists(db, resource.department_id)

    new_resource = Resource(**resource.model_dump())

    db.add(new_resource)
    db.commit()
    db.refresh(new_resource)

    return new_resource


@router.post("/faq", response_model=FAQResponse)
def create_faq(
    faq: FAQCreate,
    db: Session = Depends(get_db)
):
    ensure_department_exists(db, faq.department_id)

    new_faq = FAQ(**faq.model_dump())

    db.add(new_faq)
    db.commit()
    db.refresh(new_faq)

    return new_faq


@router.post("/tasks", response_model=OnboardingTaskResponse)
def create_task(
    task: OnboardingTaskCreate,
    db: Session = Depends(get_db)
):
    ensure_department_exists(db, task.department_id)

    new_task = OnboardingTask(**task.model_dump())

    db.add(new_task)
    db.commit()
    db.refresh(new_task)

    return new_task
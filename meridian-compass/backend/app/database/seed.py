from sqlalchemy.orm import Session

from app.models import (
    Department,
    Employee,
    OnboardingTask,
    Resource,
    FAQ,
    ScheduleItem,
)


def seed_database(db: Session):
    if db.query(Department).first():
        return

    engineering = Department(
        name="Engineering",
        description="Builds and maintains Meridian's software products."
    )
    hr = Department(
        name="HR",
        description="Supports employees, onboarding, policies and people operations."
    )
    sales = Department(
        name="Sales",
        description="Manages customers, opportunities and commercial relationships."
    )
    marketing = Department(
        name="Marketing",
        description="Promotes Meridian's brand, content and campaigns."
    )
    finance = Department(
        name="Finance",
        description="Handles budgets, invoices and financial planning."
    )

    db.add_all([engineering, hr, sales, marketing, finance])
    db.commit()

    db.refresh(engineering)
    db.refresh(hr)
    db.refresh(sales)
    db.refresh(marketing)
    db.refresh(finance)

    employees = [
        Employee(
            full_name="Sarah Mitchell",
            email="sarah.mitchell@meridian.test",
            position="HR Administrator",
            bio="Your first contact for contracts, policies and onboarding questions.",
            office_days="Monday, Tuesday, Thursday",
            department_id=hr.id,
        ),
        Employee(
            full_name="Michael Carter",
            email="michael.carter@meridian.test",
            position="Engineering Buddy",
            bio="Helps new engineers set up the development environment and understand team practices.",
            office_days="Monday, Wednesday, Thursday",
            department_id=engineering.id,
        ),
        Employee(
            full_name="Emma Johnson",
            email="emma.johnson@meridian.test",
            position="Engineering Manager",
            bio="Responsible for the engineering team and first-month expectations.",
            office_days="Monday, Tuesday, Thursday",
            department_id=engineering.id,
        ),
        Employee(
            full_name="David Brown",
            email="david.brown@meridian.test",
            position="Sales Lead",
            bio="Explains how Engineering and Sales collaborate on customer needs.",
            office_days="Tuesday, Wednesday, Thursday",
            department_id=sales.id,
        ),
        Employee(
            full_name="Olivia Green",
            email="olivia.green@meridian.test",
            position="Marketing Specialist",
            bio="Introduces Meridian's public communication and brand guidelines.",
            office_days="Monday, Thursday",
            department_id=marketing.id,
        ),
        Employee(
            full_name="James Wilson",
            email="james.wilson@meridian.test",
            position="Finance Analyst",
            bio="Helps with expense rules, invoices and budget-related questions.",
            office_days="Tuesday, Thursday",
            department_id=finance.id,
        ),
    ]

    db.add_all(employees)

    tasks = [
        OnboardingTask(
            title="Read the welcome guide",
            description="Understand the company structure, communication tools and first-week expectations.",
            category="General",
            day=1,
            is_required=True,
            department_id=hr.id,
        ),
        OnboardingTask(
            title="Join the main Slack channels",
            description="Join #general, #engineering, #announcements and your team channel.",
            category="Tools",
            day=1,
            is_required=True,
            department_id=hr.id,
        ),
        OnboardingTask(
            title="Meet your buddy",
            description="Schedule a short meeting with your assigned buddy.",
            category="People",
            day=1,
            is_required=True,
            department_id=engineering.id,
        ),
        OnboardingTask(
            title="Set up local development environment",
            description="Install required tools and run the main project locally.",
            category="Engineering",
            day=2,
            is_required=True,
            department_id=engineering.id,
        ),
        OnboardingTask(
            title="Attend engineering standup",
            description="Observe how the engineering team coordinates daily work.",
            category="Engineering",
            day=3,
            is_required=True,
            department_id=engineering.id,
        ),
        OnboardingTask(
            title="Learn the hybrid work schedule",
            description="Understand which days are office days and remote days.",
            category="General",
            day=3,
            is_required=True,
            department_id=hr.id,
        ),
    ]

    db.add_all(tasks)

    resources = [
        Resource(
            title="Slack workspace",
            description="Main internal communication tool used at Meridian.",
            url="https://slack.com",
            department_id=None,
        ),
        Resource(
            title="Google Meet",
            description="Video meeting platform used for remote and hybrid collaboration.",
            url="https://meet.google.com",
            department_id=None,
        ),
        Resource(
            title="Engineering handbook",
            description="Coding standards, pull request expectations and deployment rules.",
            url="https://example.com/engineering-handbook",
            department_id=engineering.id,
        ),
        Resource(
            title="Employee handbook",
            description="Company policies, benefits and HR procedures.",
            url="https://example.com/employee-handbook",
            department_id=hr.id,
        ),
    ]

    db.add_all(resources)

    faqs = [
        FAQ(
            question="Which days are office days?",
            answer="Meridian follows a hybrid model: 3 days in the office and 2 days remote.",
            department_id=hr.id,
        ),
        FAQ(
            question="Who do I contact if my laptop setup does not work?",
            answer="Contact your engineering buddy first. If the issue is hardware-related, contact HR.",
            department_id=engineering.id,
        ),
        FAQ(
            question="Where do meetings happen?",
            answer="Most meetings are scheduled through Google Meet. Office meetings are usually added to the shared calendar.",
            department_id=None,
        ),
        FAQ(
            question="What Slack channels should I join first?",
            answer="Start with #general, #announcements, #engineering and your team-specific channel.",
            department_id=None,
        ),
    ]

    db.add_all(faqs)

    schedule_items = [
        ScheduleItem(
            title="HR welcome meeting",
            description="Introduction to company policies, tools and first-week expectations.",
            day=1,
            time="09:30",
            location="Google Meet",
            work_mode="Remote",
            department_id=hr.id,
        ),
        ScheduleItem(
            title="Meet your engineering buddy",
            description="A practical session for tools, repositories and local setup.",
            day=1,
            time="11:00",
            location="Office / Google Meet",
            work_mode="Hybrid",
            department_id=engineering.id,
        ),
        ScheduleItem(
            title="Engineering standup",
            description="Join the team standup and observe the workflow.",
            day=2,
            time="10:00",
            location="Engineering area",
            work_mode="Office",
            department_id=engineering.id,
        ),
        ScheduleItem(
            title="Company departments introduction",
            description="Short overview of HR, Engineering, Sales, Marketing and Finance.",
            day=3,
            time="14:00",
            location="Google Meet",
            work_mode="Remote",
            department_id=None,
        ),
    ]

    db.add_all(schedule_items)

    db.commit()
from app.database.database import Base, engine, SessionLocal
from app.models import *
from app.database.seed import seed_database

def init_database():
    Base.metadata.create_all(bind=engine)

    db = SessionLocal()
    try:
        seed_database(db)
    finally:
        db.close()
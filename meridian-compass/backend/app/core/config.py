from pydantic import BaseModel


class Settings(BaseModel):
    app_name: str = "Meridian Compass API"
    version: str = "1.0.0"


settings = Settings()
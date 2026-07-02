from fastapi import FastAPI

app = FastAPI(
    title="HR Admin Backend",
    version="0.1.0"
)


@app.get("/")
def root():
    return {
        "message": "Backend is running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }
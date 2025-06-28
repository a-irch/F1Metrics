from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routers import meeting, standing

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(meeting.router)
app.include_router(standing.router)


@app.get("/")
async def root():
    return {"message": "Welcome to the F1 Metrics API"}


@app.get("/status")
async def getStatus():
    return {"status": "ok"}

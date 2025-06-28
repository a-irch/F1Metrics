from fastapi import APIRouter
import api.services.meeting as meeting_service

router = APIRouter(prefix="/meeting", tags=["Meeting"])

@router.get("/")
async def get_meetings():
    """
        Get list of all meetings.
    """
    return meeting_service.get_schedule()

@router.get("/next")
async def get_next_meeting():
    """
        Get the next meeting details.
    """
    next_meeting = meeting_service.get_next_event()
    return {
        "meeting" : next_meeting,
        "sessions" : meeting_service.get_event_sessions(next_meeting["round"])
    }
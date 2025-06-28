from fastf1 import get_event_schedule, get_event
from datetime import datetime

def get_schedule():
    schedule = get_event_schedule(2025)
    result = []
    for row in schedule.itertuples(index=False):
        result.append({
            "round": getattr(row, "RoundNumber", 0),
            "country": getattr(row, "Country", ""),
            "location": getattr(row, "Location", ""),
            "official_name": getattr(row, "OfficialEventName", ""),
            "event_date": getattr(row, "EventDate", "").isoformat() if getattr(row, "EventDate", None) else "",
            "event_name": getattr(row, "EventName", ""),
            "event_format": getattr(row, "EventFormat", ""),
        })
    return result

def get_next_event():
    schedule = get_event_schedule(2025)
    now = datetime.now()
    for meeting in schedule.itertuples(index=False):
        event_date = getattr(meeting, "EventDate", None)
        if event_date and event_date > now:
            return {
                "round": getattr(meeting, "RoundNumber", 0),
                "country": getattr(meeting, "Country", ""),
                "location": getattr(meeting, "Location", ""),
                "official_name": getattr(meeting, "OfficialEventName", ""),
                "event_date": getattr(meeting, "EventDate", "").isoformat() if getattr(meeting, "EventDate", None) else "",
                "event_name": getattr(meeting, "EventName", ""),
                "event_format": getattr(meeting, "EventFormat", ""),
            }
    return None

def get_event_sessions(round_number: int):
    meeting = get_event(2025, round_number)
    result = []
    for i in range(1, 6):
        session = meeting.get_session(i)
        if session is None:
            continue
        result.append({
            "number": i,
            "name": session.name,
            "date": session.date,
        })
    return result

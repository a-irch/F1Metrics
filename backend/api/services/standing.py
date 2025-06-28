from fastf1.ergast import Ergast

ergast = Ergast()

def get_driver_standing():
    standings = ergast.get_driver_standings(season='current').content[0]
    result = []
    for row in standings.itertuples(index=False):
        result.append({
            "id": getattr(row, "driverId", ""),
            "number": getattr(row, "driverNumber", None),
            "position": getattr(row, "position", "N/A"), 
            "name": f"{getattr(row, 'givenName', '')} {getattr(row, 'familyName', '')}".strip(),
            "nationality": getattr(row, "driverNationality", ""),
            "points": getattr(row, "points", 0),
            "wins": getattr(row, "wins", 0),
            "team": getattr(row, "constructorIds", "N/A")[-1], 
        })
    return result

def get_constructor_standing():
    standings = ergast.get_constructor_standings(season='current').content[0]
    result = []
    for row in standings.itertuples(index=False):
        result.append({
            "id": getattr(row, "constructorId", ""),
            "position": getattr(row, "position", "N/A"),
            "constructor": getattr(row, "constructorName", "N/A"),
            "points": getattr(row, "points", 0),
            "wins": getattr(row, "wins", 0),
        })
    return result

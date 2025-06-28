from fastapi import APIRouter
import api.services.standing as standing_service

router = APIRouter(prefix="/standing", tags=["Standing"])

@router.get("/")
async def get_standings():
    return {
        "drivers": standing_service.get_driver_standing(),
        "constructors": standing_service.get_constructor_standing()
    }

@router.get("/drivers")
async def get_driver_standing():
    """
        Get the current driver standings.
    """
    return standing_service.get_driver_standing()

@router.get("/constructors")
async def get_constructor_standing():
    """
        Get the current constructor standings.
    """
    return standing_service.get_constructor_standing()
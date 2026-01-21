from pydantic import BaseModel
from typing import Optional, List

class OnboardingRequest(BaseModel):
    resolution_text: str
    past_attempts: Optional[str] = None
    life_constraints: Optional[List[str]] = None
    occupation: Optional[str] = None
    occupation_details: Optional[dict] = None


class OnboardingResponse(BaseModel):
    final_plan: dict
    debate_summary: dict
    confidence_score: float

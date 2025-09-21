from pydantic import BaseModel, Field

class ConsultationCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=50)
    phone: str = Field(..., regex=r"^\+7 \d{3}-\d{3}-\d{2}-\d{2}$")
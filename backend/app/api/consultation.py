from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.consultation import ConsultationCreate
from app.database.models import Consultation
from app.database.db import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/consultation")
def create_consultation(form: ConsultationCreate, db: Session = Depends(get_db)):
    consultation = Consultation(name=form.name, phone=form.phone)
    db.add(consultation)
    db.commit()
    db.refresh(consultation)
    return {"success": True, "id": consultation.id}
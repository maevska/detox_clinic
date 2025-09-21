from fastapi import FastAPI
from app.core.cors import setup_cors
from app.api.consultation import router as consultation_router
from app.database.models import Base
from app.database.db import engine

app = FastAPI()

setup_cors(app)

Base.metadata.create_all(bind=engine)
app.include_router(consultation_router)
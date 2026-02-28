from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from models import ChatRequest, ResumeRequest
from services.core import generate_resume

router = APIRouter()

@router.post("/chat")
def chat(req: ChatRequest):
    return {"message": req.message}

@router.post("/resume")
def resume(req: ResumeRequest):
    return generate_resume(req)
from pydantic import BaseModel

class ChatRequest(BaseModel):
    message: str

class ResumeRequest(BaseModel):
    name: str
    email: str
    experience: str
    skills: str
    education: str
    objective: str = ""
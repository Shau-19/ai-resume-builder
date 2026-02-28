import httpx
import os
from dotenv import load_dotenv
from langchain.llms import AI21

load_dotenv()

AI21_API_KEY = os.getenv('AI21_API_KEY')

async def generate_resume(req):
    llm = AI21(api_key=AI21_API_KEY)
    prompt = f"Generate a resume for {req.name} with experience in {req.experience}, skills in {req.skills}, education in {req.education}, and objective {req.objective}."
    response = await llm({'prompt': prompt})
    return response
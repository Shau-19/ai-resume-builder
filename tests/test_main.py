from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_chat():
    response = client.post("/chat", json={"message": "Hello"})
    assert response.status_code == 200
    assert response.json()["message"] == "Hello"

def test_resume():
    response = client.post("/resume", json={"name": "John", "email": "john@example.com", "experience": "Software Engineer", "skills": "Python, JavaScript", "education": "Bachelor's Degree"})
    assert response.status_code == 200
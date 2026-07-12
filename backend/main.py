from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from agents.planner_agent import planner_agent
from agents.teaching_agent import teaching_agent
from agents.resource_agent import resource_agent
from agents.quiz_agent import quiz_agent
from agents.notes_agent import notes_agent
from services.pdf_service import generate_pdf
from fastapi.responses import FileResponse

app = FastAPI(
    title="AI Voice Learning Tutor",
    version="1.0"
)

# ✅ ADD CORS HERE
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "AI Voice Learning Tutor Backend Running"
    }


@app.get("/chat")
def chat(query: str):

    decision = planner_agent(query)

    if decision == "Teaching":

        return {
            "Agent": "Teaching",
            "Response": teaching_agent(query)
        }

    elif decision == "Resource":

        return {
            "Agent": "Resource",
            "Response": resource_agent(query)
        }

    elif decision == "Quiz":

        return {
            "Agent": "Quiz",
            "Response": quiz_agent(query)
        }

    elif decision == "Notes":

        topic = query

        words = [
            "generate notes on",
            "generate notes about",
            "notes on",
            "notes about",
            "about",
        ]

        for word in words:
            topic = topic.lower().replace(word, "")

        topic = topic.strip().title()

        return {
            "Agent": "Notes",
            "Topic": topic,
            "Response": notes_agent(topic)
        }

    else:

        return {
            "Agent": "Unknown",
            "Response": "Sorry, I couldn't determine which agent should handle your request."
        }
    
@app.get("/download_pdf")
def download_pdf(topic: str):

    notes = notes_agent(topic)

    pdf_path = generate_pdf(topic, notes)

    return FileResponse(
        path=pdf_path,
        filename=f"{topic}.pdf",
        media_type="application/pdf"
    )
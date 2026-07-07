from services.openrouter import call_llm
from prompts import NOTES_PROMPT


def notes_agent(topic):
    return call_llm(
        NOTES_PROMPT,
        topic
    )
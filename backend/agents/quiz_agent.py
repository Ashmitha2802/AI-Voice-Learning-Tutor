from services.openrouter import call_llm
from prompts import QUIZ_PROMPT


def quiz_agent(topic):
    return call_llm(
        QUIZ_PROMPT,
        topic
    )
from services.openrouter import call_llm
from prompts import TEACHING_PROMPT


def teaching_agent(user_query):
    response = call_llm(
        TEACHING_PROMPT,
        user_query
    )

    return response
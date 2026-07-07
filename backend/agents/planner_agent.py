from services.openrouter import call_llm
from prompts import PLANNER_PROMPT


def planner_agent(user_query):
    decision = call_llm(
        PLANNER_PROMPT,
        user_query
    )

    return decision.strip()
import wikipediaapi

wiki = wikipediaapi.Wikipedia(
    language="en",
    user_agent="AI-Voice-Learning-Tutor/1.0"
)

def get_summary(topic):
    page = wiki.page(topic)

    if page.exists():
        return page.summary[:800]

    return "No Wikipedia information found."
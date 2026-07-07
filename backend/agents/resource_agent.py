from services.wikipedia_service import get_summary
from services.dictionary_service import get_meaning
from services.book_service import recommend_books


def resource_agent(topic):

    return {
        "Summary": get_summary(topic),
        "Definition": get_meaning(topic),
        "Recommended Books": recommend_books(topic)
    }
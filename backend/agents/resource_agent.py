import re
from services.wikipedia_service import get_summary

from services.book_service import recommend_books


def clean_topic(query):
    query = query.lower()

    phrases = [
        "tell me about",
        "tell me",
        "what is",
        "define",
        "explain",
        "about",
        "notes about",
        "give notes on",
        "generate notes on",
        "generate notes about",
        "describe",
    ]

    for phrase in phrases:
        query = query.replace(phrase, "")

    query = re.sub(r"\s+", " ", query).strip()

    return query.title()


def resource_agent(query):

    topic = clean_topic(query)

    summary = get_summary(topic)

    books = recommend_books(topic)

    return f"""
# 📚 Resource Information

## 📖 Topic

{topic}

---

## 📝 Summary

{summary}

---

## 📚 Recommended Books

{chr(10).join([f"- {book}" for book in books])}
"""
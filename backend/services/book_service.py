import requests


def recommend_books(topic):
    url = "https://openlibrary.org/search.json"

    try:
        response = requests.get(
            url,
            params={"q": topic},
            timeout=10
        )

        response.raise_for_status()

        data = response.json()

        books = []

        for book in data["docs"][:5]:
            title = book.get("title")

            if title:
                books.append(title)

        return books

    except Exception:
        return []
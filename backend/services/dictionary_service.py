import requests


def get_meaning(word):
    url = f"https://api.dictionaryapi.dev/api/v2/entries/en/{word}"

    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()

        data = response.json()

        meaning = data[0]["meanings"][0]["definitions"][0]["definition"]

        return meaning

    except Exception:
        return "No definition found."
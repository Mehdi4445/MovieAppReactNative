
const API_TOKEN = "495f800b";

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'http://www.omdbapi.com/?apikey=' + API_TOKEN + '&t=' + text
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }
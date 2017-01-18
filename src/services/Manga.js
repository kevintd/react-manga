const url = 'http://localhost:10000/api/manga'

export const fetchMangas = () => {
  return fetch(url).then((response) => {
    return response.json().then((data) => data);
  })
}

export const fetchChapters = (mangaName) => {
  return fetch(`http://localhost:10000/api/manga/${mangaName}`).then(response => {
    return response.json().then(data => data);
  })
}
const url = 'http://localhost:10000/api/manga'

export const fetchMangas = () => {
  return fetch(url).then((response) => {
    return response.json().then((data) => data);
  })
}
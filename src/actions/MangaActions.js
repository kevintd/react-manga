const LOAD_MANGAS = 'LOAD_MANGAS';

export const loadMangas = () => {
  return {
    type: LOAD_MANGAS
  }
}

export const fetchMangas = () => {
  return fetch(url).then((response) => {
    return response.json().then((data) => { mangas: data })
  })
}
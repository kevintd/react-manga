export const LOAD_MANGAS = 'LOAD_MANGAS';
export const SELECT_MANGA = 'SELECT_MANGA';

export const loadMangas = () => {
  return {
    type: LOAD_MANGAS
  }
}

export const selectManga = (manga) => {
  return {
    type: SELECT_MANGA,
    manga
  }
}

export const fetchMangas = () => {
  return fetch(url).then((response) => {
    return response.json().then((data) => { mangas: data })
  })
}
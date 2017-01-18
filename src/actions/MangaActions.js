export const LOAD_MANGAS = 'LOAD_MANGAS';
export const LOAD_CHAPTERS = 'LOAD_CHAPTERS';
export const SELECT_MANGA = 'SELECT_MANGA';
export const CHAPTERS_FETCHED = 'CHAPTERS_FETCHED';

export const loadMangas = () => {
  return {
    type: LOAD_MANGAS
  }
}

export const loadChapters = (mangaName) => {
  return {
    type: LOAD_CHAPTERS,
    mangaName
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
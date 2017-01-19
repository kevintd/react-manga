export const LOAD_MANGAS = 'LOAD_MANGAS';
export const LOAD_CHAPTERS = 'LOAD_CHAPTERS';
export const SELECT_MANGA = 'SELECT_MANGA';
export const READ_CHAPTER = 'READ_CHAPTER';
export const CHAPTERS_FETCHED = 'CHAPTERS_FETCHED';
export const CHAPTER_FETCHED = 'CHAPTER_FETCHED';
export const FIND_MANGA = 'FIND_MANGA';

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

export const readChapter = (mangaName, chapterName) => {
  return {
    type: READ_CHAPTER,
    mangaName,
    chapterName
  }
}

export const selectManga = (manga) => {
  return {
    type: SELECT_MANGA,
    manga
  }
}

export const findManga = (mangaTitle) => {
  return {
    type: FIND_MANGA,
    mangaTitle
  }
}


export const fetchMangas = () => {
  return fetch(url).then((response) => {
    return response.json().then((data) => { mangas: data })
  })
}
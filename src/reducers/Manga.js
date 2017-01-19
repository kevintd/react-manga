import { LOAD_MANGAS, SELECT_MANGA, LOAD_CHAPTERS, CHAPTERS_FETCHED, READ_CHAPTER, CHAPTER_FETCHED } from '../actions/MangaActions';

const initialState = {
  isLoading: false,
  mangas: [],
  chapters: []
};

const MangaReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MANGAS:
      return { ...state, isLoading: true }
    case LOAD_CHAPTERS:
      return { ...state, currentChapter: null };
    case READ_CHAPTER:
      return { ...state }
    case SELECT_MANGA:
      return { ...state, selectedManga: action.manga }
    case CHAPTERS_FETCHED:
      return { ...state, chapters: action.chapters }
    case CHAPTER_FETCHED:
      return { ...state, currentChapter: action.chapter }
    case 'MANGAS_LOADED':
      return { ...state, isLoading: false, mangas: action.mangas };
    default: return state;
  }
}

export default MangaReducer;
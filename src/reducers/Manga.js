import { LOAD_MANGAS, SELECT_MANGA, LOAD_CHAPTERS, CHAPTERS_FETCHED } from '../actions/MangaActions';

const initialState = {
  isLoading: false,
  mangas: [],
  chapters: []
};

const MangaReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MANGAS:
    case LOAD_CHAPTERS:
      return { ...state, isLoading: true }
    case SELECT_MANGA:
      return { ...state, selectedManga: action.manga }
    case CHAPTERS_FETCHED:
      return { ...state, chapters: action.chapters, isLoading: false }
    case 'MANGAS_LOADED':
      return { isLoading: false, mangas: action.mangas };
    default: return state;
  }
}

export default MangaReducer;
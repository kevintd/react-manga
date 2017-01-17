import { LOAD_MANGAS, SELECT_MANGA } from '../actions/Manga';

const initialState = {
  isLoading: false,
  mangas: []
};

const MangaReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MANGAS:
      return { ...state, isLoading: true }
    case SELECT_MANGA:
      return { ...state, selectedManga: action.manga }
    case 'MANGAS_LOADED':
      return { isLoading: false, mangas: action.mangas };
    default: return state;
  }
}

export default MangaReducer;
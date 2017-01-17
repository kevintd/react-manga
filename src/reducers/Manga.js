const initialState = {
  isLoading: false,
  mangas: []
};

const MangaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_MANGAS':
      return { ...state, isLoading: true }
    case 'MANGAS_LOADED':
      return { isLoading: false, mangas: action.mangas };
    default: return state;
  }
}

export default MangaReducer;
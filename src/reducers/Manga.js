const initialState = {
  mangas: []
};

const MangaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MANGAS_LOADED':
      return { ...state, mangas: action.mangas };
    default: return state;
  }
}

export default MangaReducer;
import { fetchMangas, fetchChapters } from '../services/Manga';
import { CHAPTERS_FETCHED } from '../actions/MangaActions';

import { put, call } from 'redux-saga/effects';

export function* loadMangas() {
  try {
    const mangas = yield call(fetchMangas);
    yield put({ type: 'MANGAS_LOADED', mangas });
  } catch (error) {
    
  }
  
}

export function* loadChapters(action) {
  try {
    const chapters = yield call(fetchChapters, action.mangaName);
    yield put({ type: CHAPTERS_FETCHED, chapters });
  } catch (error) {

  }
}
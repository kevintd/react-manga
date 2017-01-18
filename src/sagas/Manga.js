import { fetchMangas } from '../services/Manga';
import { put, call } from 'redux-saga/effects';

export function* loadMangas() {
  try {
    const mangas = yield call(fetchMangas);
    yield put({ type: 'MANGAS_LOADED', mangas });
  } catch (error) {
    
  }
  
}
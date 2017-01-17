import { fetchMangas } from '../services/Manga';
import { put, call } from 'redux-saga/effects';

export function* loadMangas() {
  const mangas = yield call(fetchMangas);
  yield put({ type: 'MANGAS_LOADED', mangas });
}
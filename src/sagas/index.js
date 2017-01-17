import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { loadMangas } from './Manga';

export function* sagas() {
  yield [
    fork(takeLatest, 'LOAD_MANGAS', loadMangas)
  ]
}

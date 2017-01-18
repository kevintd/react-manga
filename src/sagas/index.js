import { LOAD_MANGAS, LOAD_CHAPTERS } from '../actions/MangaActions';
import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { loadMangas, loadChapters } from './Manga';

export function* sagas() {
  yield [
    fork(takeLatest, 'LOAD_MANGAS', loadMangas),
    fork(takeLatest, 'LOAD_CHAPTERS', loadChapters )
  ]
}

import { LOAD_MANGAS, LOAD_CHAPTERS, READ_CHAPTER } from '../actions/MangaActions';
import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { loadMangas, loadChapters, loadChapter } from './Manga';

export function* sagas() {
  yield [
    fork(takeLatest, LOAD_MANGAS, loadMangas),
    fork(takeLatest, LOAD_CHAPTERS, loadChapters),
    fork(takeLatest, READ_CHAPTER, loadChapter)
  ]
}

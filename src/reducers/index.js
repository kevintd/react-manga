import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import mangaReducer from './Manga';

export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  manga: mangaReducer
});

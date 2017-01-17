import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import injectTapEventPlugin from 'react-tap-event-plugin';

import { store } from "./store.js";
import { router } from "./router.js";

injectTapEventPlugin();
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);

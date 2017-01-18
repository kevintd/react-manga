import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import MangaContainer from "./components/MangaContainer";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={MangaContainer}/>
      <Route path="/manga" component={MangaContainer} />
      <Route path="/manga/:mangaName" component={MangaContainer} />
      <Route path="/manga/:mangaName/:chapterName" component={MangaContainer} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };

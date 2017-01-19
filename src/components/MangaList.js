import React, { Component } from 'react';
import { Link } from 'react-router';

import Divider from 'material-ui/Divider';
import CircularProgress from 'material-ui/CircularProgress';
import { List, ListItem } from 'material-ui/List';

import Manga from './Manga';

const MangaList = ({ mangas, isLoading, selectManga }) => (
  <div id="manga-list" className={isLoading ? "loading" : ""}>
    <List>
    {
      isLoading ? ( 
        <div id="loader">
          <CircularProgress size={60} thickness={7} color="#00E5FF"/> 
          </div>
      ) : 
      mangas.map((manga) => (
        <div className="manga-list-item"  key={manga._id}>
          <img src={manga.thumb} height="70px"/>
          <ListItem 
            primaryText={manga.title} 
            containerElement={<Link to={"/manga/" + manga.name} />} 
            onClick={() => selectManga(manga)}
          />
        </div>
      ))
    }
    </List>
  </div>
)

export default MangaList;
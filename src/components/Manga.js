import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import CircularProgress from 'material-ui/CircularProgress';
import { List, ListItem } from 'material-ui/List';

import * as MangaActions from '../actions/Manga'

export class Manga extends Component {
  componentDidMount() {
    this.props.loadMangas();
  }
  render() {
    const { isLoading, mangas, selectManga } = this.props;
    return (
      <div id="manga-list" className={isLoading ? "loading" : ""}>
        <List>
          {
            isLoading ? ( 
              <div id="loader">
                <CircularProgress size={60} thickness={7} color="#64FFDA"/> 
              </div>
            ) :
            mangas.map((manga) => (
              <ListItem primaryText={manga.title} key={manga._id} containerElement={<Link to="/"/>} />
            ))
          }
        </List>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.manga.isLoading,
    mangas: state.manga.mangas
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(MangaActions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Manga)
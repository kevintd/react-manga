import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CircularProgress from 'material-ui/CircularProgress';
import { List, ListItem } from 'material-ui/List';

import * as MangaActions from '../actions/MangaActions'

export class Manga extends Component {
  componentDidMount() {
    this.props.loadMangas();
  }
  render() {
    const { isShow, mangas } = this.props;
    return (
      <div>
        <List>
          {
            isShow ? ( 
              <div id="loader">
                <CircularProgress size={60} thickness={7} color="#64FFDA"/> 
              </div>
            ) :
            mangas.map((manga) => (
              <ListItem primaryText={manga.title} key={manga._id}></ListItem>
            ))
          }
        </List>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isShow: state.manga.isLoading,
    mangas: state.manga.mangas
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(MangaActions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Manga)
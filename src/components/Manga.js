import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, ListItem } from 'material-ui/List';
import * as MangaActions from '../actions/MangaActions'

export class Manga extends Component {
  componentDidMount() {
    this.props.loadMangas();
  }
  render() {
    const { mangas } = this.props;
    return (
      <div>
        <List>
          {
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
    mangas: state.manga.mangas
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(MangaActions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Manga)
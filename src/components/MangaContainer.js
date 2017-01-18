import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as MangaActions from '../actions/MangaActions';
import MangaList from './MangaList';
import Manga from './Manga';

export class MangaContainer extends Component {

  render() {
    let { selectedManga, location } = this.props;

    return (
      <div>
      {
        selectedManga ? (
          <Manga selectedManga={selectedManga} />
        ) : (
          <MangaList {...this.props} />
        )
      }
      </div>
    )
  }

  componentDidMount() {
    let { loadMangas  } = this.props;
    loadMangas();
    
  }
  componentWillReceiveProps(nextProps) {
    let { isLoading, selectManga, mangas, params, selectedManga } = nextProps;
    if (params.mangaName && !isLoading && typeof selectedManga === 'undefined') {
      console.log(nextProps);
      selectManga(mangas.find((manga) => manga.name == params.mangaName));
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    mangas: state.manga.mangas,
    isLoading: state.manga.isLoading,
    selectedManga: state.manga.selectedManga,
    params: ownProps.params
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(MangaActions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(MangaContainer)


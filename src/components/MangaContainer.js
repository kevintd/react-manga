import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AutoComplete from 'material-ui/AutoComplete';

import * as MangaActions from '../actions/MangaActions';
import MangaList from './MangaList';
import Manga from './Manga';

export class MangaContainer extends Component {
  render() {
    let { selectedManga, location, mangas, chapters } = this.props;

    return (
      <div className="manga-container">
        <div className="manga-search">
          <AutoComplete 
            hintText="Find Manga..." 
            dataSource={mangas.map((manga) => manga.title)} 
            filter={AutoComplete.caseInsensitiveFilter}
            fullWidth={true}/>
        </div>
        
      {
        selectedManga ? (
          <Manga selectedManga={selectedManga} chapters={chapters}/>
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
    let { isLoading, selectManga, mangas, params, selectedManga , loadChapters, chapters } = nextProps;
    if (params.mangaName && !isLoading && typeof selectedManga === 'undefined') {
      selectManga(mangas.find((manga) => manga.name == params.mangaName));
    }
    if (selectedManga) {
      loadChapters(selectedManga.name);
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    mangas: state.manga.mangas,
    chapters: state.manga.chapters,
    isLoading: state.manga.isLoading,
    selectedManga: state.manga.selectedManga,
    params: ownProps.params
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(MangaActions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(MangaContainer)


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AutoComplete from 'material-ui/AutoComplete';

import * as MangaActions from '../actions/MangaActions';
import MangaList from './MangaList';
import Manga from './Manga';

export class MangaContainer extends Component {
  render() {
    let { selectedManga, location, mangas, chapters, currentChapter } = this.props;

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
          currentChapter ? (
            currentChapter.imgs.map((img, index) => <img src={img} width="100%" key={index} />)
          ) : 
          (
            selectedManga ? (
              <Manga selectedManga={selectedManga} chapters={chapters}/>
            ) : (
              <MangaList {...this.props} />
            )
          )
        }
      
      </div>
    )
  }

  componentDidMount() {
    let { loadMangas, params, loadChapters, readChapter  } = this.props;
    loadMangas();
    if (params.mangaName) {
      loadChapters(params.mangaName);
      if (params.chapterName) {
        readChapter(params.mangaName, params.chapterName)
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    let { isLoading, selectManga, mangas, params, selectedManga, loadChapters, readChapter } = nextProps;
    if (params.mangaName && !isLoading && typeof selectedManga === 'undefined') {
      selectManga(mangas.find((manga) => manga.name == params.mangaName));
    }
    if (this.props.params.mangaName !== params.mangaName) {
      loadChapters(params.mangaName);
    }
    if (params.chapterName && this.props.params.chapterName !== params.chapterName) {
        readChapter(params.mangaName, params.chapterName)
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    mangas: state.manga.mangas,
    currentChapter: state.manga.currentChapter,
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


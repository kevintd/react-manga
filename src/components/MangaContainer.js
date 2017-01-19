import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import AutoComplete from 'material-ui/AutoComplete';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';

import * as MangaActions from '../actions/MangaActions';

import MangaList from './MangaList';
import MangaReader from './MangaReader';
import Manga from './Manga';

export class MangaContainer extends Component {
  constructor() {
    super();
    this.handleNewRequest = this.handleNewRequest.bind(this)
    this.handleUpdateInput = this.handleUpdateInput.bind(this)
    this.handleScrollTop = this.handleScrollTop.bind(this)
    this.handleChangeChapter = this.handleChangeChapter.bind(this)
    this.state = {
      search: ''
    }
  }
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  handleUpdateInput(mangaTitle) {
    this.setState({
      search: mangaTitle
    });
  }
  handleNewRequest(mangaTitle) {
    let { mangas } = this.props;
    let manga = mangas.find((manga) => manga.title == mangaTitle)
    if (manga) {
      this.setState({
        search: ''
      });
      browserHistory.push(`/manga/${manga.name}`);
    }
  }

  handleChangeChapter(event, index, value) {
    let { chapters, currentChapter, selectedManga } = this.props;
    let oldIndex = chapters.findIndex((chapter) => chapter.chapterName === currentChapter.chapterName);
    if (index !== oldIndex) {
      browserHistory.push(`/manga/${chapters[index].manga}/${chapters[index].chapterName}`)
    }
  }

  render() {
    let { selectedManga, location, mangas, chapters, currentChapter, findManga } = this.props;

    return (
      <div className="manga-container">
        <div className="manga-search">
          <AutoComplete 
            hintText="Find Manga..." 
            searchText={this.state.search}
            dataSource={mangas.map((manga) => manga.title)} 
            filter={AutoComplete.caseInsensitiveFilter}
            onUpdateInput={this.handleUpdateInput}
            onNewRequest={this.handleNewRequest}
            fullWidth={true}/>
        </div>
        {
          currentChapter ? (
            <div>
            <MangaReader currentChapter={currentChapter} chapters={chapters} handleChangeChapter={this.handleChangeChapter}/>
              <FloatingActionButton mini={true} 
                style={{ position: 'fixed', bottom: 10, right: 10 }}
                onClick={this.handleScrollTop} >
                <NavigationArrowUpward />
              </FloatingActionButton>
            </div>
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
    if (params.mangaName && !isLoading && typeof selectedManga === 'undefined' ) {
      selectManga(mangas.find((manga) => manga.name == params.mangaName));
    }
    if (this.props.params.mangaName !== params.mangaName) {
      loadChapters(params.mangaName);
      selectManga(mangas.find((manga) => manga.name == params.mangaName));
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


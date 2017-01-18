import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import MangaContainer from './MangaContainer';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    }
    this.select = this.select.bind(this);
  }

  select(index)  {
    this.setState({selectedIndex: index});
  }

  render() {
    let { mangaName } = this.props.params;
    return (
      <div id="home">
        <MangaContainer />
        <div id="bottom-nav">
          <Paper zDepth={1}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem
                label="Favorites"
                icon={favoritesIcon}
                onTouchTap={() => this.select(1)}
              />
              <BottomNavigationItem
                label="Recommend"
                icon={recentsIcon}
                onTouchTap={() => this.select(0)}
              />
              <BottomNavigationItem
                label="Recents"
                icon={nearbyIcon}
                onTouchTap={() => this.select(2)}
              />
            </BottomNavigation>
          </Paper>
        </div>
      </div>
    );
  }
}
import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import "../stylesheets/main.scss";

const style = {
  height: '100%'
}

const muiTheme = getMuiTheme({
  appBar: {
    height: 55,
    color: '#00E5FF'
  },
  textField: {
    focusColor: '#00E5FF'
  },
  card: {
    fontWeight: 300
  },
  floatingActionButton: {
    color: '#00E5FF'
  }
})
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
    this.handleToogle = this.handleToogle.bind(this)
  }

  handleToogle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={style}>
          <AppBar title="Pamu"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToogle}
            />
          <Drawer open={this.state.open} docked={false} width={200} onRequestChange={(open) => this.setState({open})}>
            <AppBar title="Pamu" />
            <MenuItem>Manga</MenuItem>
            <MenuItem>Anime</MenuItem>
            <MenuItem>EDM</MenuItem>
            <MenuItem>Truyen Chu</MenuItem>
          </Drawer>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

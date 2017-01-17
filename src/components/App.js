import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import "../stylesheets/main.scss";

const style = {
  height: '100%'
}

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={style}>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

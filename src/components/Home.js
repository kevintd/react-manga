import React, { Component } from 'react';
import Manga from './Manga';

export default class Home extends Component {
  render() {
    return (
      <div className="page-home">
        <Manga />
      </div>
    );
  }
}

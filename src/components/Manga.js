import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

const Manga = ({ selectedManga }) => (
  <div>
    <Paper zDepth={1}>{ selectedManga.title }</Paper>
    <Paper zDepth={1}>{ selectedManga.description }</Paper>
    <Paper zDepth={1}>{ selectedManga.view }</Paper>
  </div>
)

export default Manga;
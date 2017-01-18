import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chip from 'material-ui/Chip';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const Manga = ({ selectedManga, chapters }) => (
  <div className="manga">
    <div className="manga-info">
      <div className="manga-thumb">
      <Card>
        <CardMedia overlay={<CardTitle title={selectedManga.title} />}>
          <img src={selectedManga.thumb}/>
        </CardMedia>
      </Card>
    </div>
    <div className="manga-description">
    {
      selectedManga.genres.map((genre, index) => <Chip key={index}  >{ genre }</Chip>)
    }
    </div>
    </div>
    <div className="manga-chapters">
    {
      chapters.map((chapter) => <p> { chapter.title }</p>)
    }
    </div>
  </div>
  
)

export default Manga;
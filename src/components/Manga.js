import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Chip from 'material-ui/Chip';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import { List, ListItem } from 'material-ui/List';

const Manga = ({ selectedManga, chapters }) => (
  <div className="manga">
    <div className="manga-info">
      <div className="manga-thumb">
        <div>
          <Card>
            <CardMedia overlay={<CardTitle subtitle={selectedManga.title} />}>
              <img src={selectedManga.thumb}/>
            </CardMedia>
          </Card>
        </div>
      </div>
      <div className="manga-description">
      {
        selectedManga.genres.map((genre, index) => <div  key={index} className="manga-genre"><Chip  >{ genre }</Chip></div>)
      }
      </div>
    </div>
    
    <div className="manga-chapters">
    {
      
      chapters ? ( 
        <List>
        {
          chapters.map((chapter) => <ListItem key={chapter._id} primaryText={chapter.title} 
            containerElement={<Link to={"/manga/" + selectedManga.name + "/" + chapter.chapterName} />}/>)  
        } 
        </List>
      ) : (
        <CircularProgress size={60} thickness={7} color="#00E5FF"/> 
      )
    }
    </div>
  </div>
  
)

export default Manga;
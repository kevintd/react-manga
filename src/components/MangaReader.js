import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const MangaReader = ({ currentChapter }) => (
  <div>
    {
      currentChapter.imgs.map((img, index) => <img src={img} width="100%" key={index} />)
    }
    <FloatingActionButton mini={true} style={{ position: 'fixed', bottom: 10, right: 10 }}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
)

export default MangaReader
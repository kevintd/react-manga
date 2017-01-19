import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const MangaReader = ({ currentChapter, chapters, handleChangeChapter }) => (
  <div>
    <SelectField maxHeight={300} value={chapters.findIndex((chapter) => chapter.chapterName === currentChapter.chapterName)} onChange={handleChangeChapter} style={{ width: '100%' }}>
      {
        chapters.map((chapter, index) => <MenuItem value={index} key={chapter._id} primaryText={chapter.title} />)
      }
    </SelectField>
    {
      currentChapter.imgs.map((img, index) => <img src={img} width="100%" key={index} />)
    }
  </div>
)

export default MangaReader
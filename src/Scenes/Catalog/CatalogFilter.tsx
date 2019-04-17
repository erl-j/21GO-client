import * as React from 'react';
import { useState } from 'react';
import locationIcon from '../../img/icons/location.svg';
import parcelIcon from '../../img/icons/addParcel.svg';
import dropdownIcon from '../../img/icons/dropdown.svg';
import Tag from './Tag';

const CatalogFilter = ({pushParam}) => {

  const searchParams={
    EARLIEST_DEADLINE:{sortType:"deadline",sortOrder:"ASC"},
    LATEST_DEADLINE:{sortType:"deadline",sortOrder:"DESC"},
    MOST_RECENT:{sortType:"createdAt",sortOrder:"ASC"},
    OLDEST:{sortType:"createdAt",sortOrder:"DESC"}
  }

  const [sort, setSort] = useState("EARLIEST_DEADLINE");
  const [inputTag, setInputTag] = useState('');
  const array: string[] = [];
  const [tags, setTags] = useState(array);
  const [visible, setVisible] = useState(false);


  const handleSortChange = event => {
    setSort(event.target.value);
    pushParam(searchParams[event.target.value]);
  }

  const handleInputTagChange = event => {
    setInputTag(event.target.value);
    
  }

  const handleKeyPress = event => {
    if(event.key === 'Enter') {
      setTags(tags.concat(inputTag));
      pushParam({tags:[...tags,inputTag]});
      setInputTag('');
    }
  }

  const handleTagDelete = (index) => {
    const newTags = Object.assign([], tags);
    newTags.splice(index, 1);
    setTags(newTags);
  }

  const handleTagsClick = (event) => {
    if(visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  return (
    <div className="filter">
      <div className="filter-content">
        <div className="box1">
          <span className="label">Sort by
          <select name="sortBy" value={sort} onChange={handleSortChange}>
            <option value="EARLIEST_DEADLINE">Earliest deadline</option>
            <option value="LATEST_DEADLINE">Latest deadline</option>
            <option value="MOST_RECENT">Most recent</option>
            <option value="OLDEST">Oldest</option>/option>
          </select>
          </span>
          <span className="label" onClick={handleTagsClick}>Tags
          <img className="dropdown" src={dropdownIcon} alt="Dropdown" />
          </span>
        </div>
        <div className="box2">
          <img src={locationIcon} alt="Location" />
          <img src={parcelIcon} alt="AddParcel" />
        </div>
      </div>
      <div className={visible ? "tags_master visible" : "tags_master"}>
        <div className="tags clearfix">
          {tags.map((tag, index) => <Tag key={index} tag={tag} index={index} onDeleteClick={handleTagDelete}/>)}
        </div>
        <div className="tags_input">
          <input type="text" value={inputTag} onChange={handleInputTagChange} onKeyPress={handleKeyPress} autoFocus={true} placeholder="add..." />
        </div>
      </div>
    </div>
  );
};

export default CatalogFilter;

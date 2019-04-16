import * as React from 'react';
import { useState } from 'react';
import locationIcon from '../../img/icons/location.svg';
import parcelIcon from '../../img/icons/addParcel.svg';
import dropdownIcon from '../../img/icons/dropdown.svg';
import Tag from './Tag';

const CatalogFilter = ({pushParam}) => {
  const countryList = ['All', 'Sweden', 'United States', 'United Kingdom'];

  const [from, setFrom] = useState('All');
  const [sort, setSort] = useState('earlyDeadline');
  const [inputTag, setInputTag] = useState('');
  const array: string[] = [];
  const [tags, setTags] = useState(array);
  const [visible, setVisible] = useState(false);


  const handleFromChange = event => {
    setFrom(event.target.value);
    pushParam({from:event.target.value});
  }

  const handleSortChange = event => {
    setSort(event.target.value);
    pushParam({sort:event.target.value});
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
            <option value="earlyDeadline">Early Deadline</option>
            <option value="distance">Distance</option>
            <option value="newIn">New in</option>
          </select>
          </span>
          <span className="label">From
          <select name="fromCountry" value={from} onChange={handleFromChange}>
            {countryList.map((country) => <option key={country} value={country}>{country}</option>)}
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

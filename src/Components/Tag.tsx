import * as React from 'react';
import deleteIcon from '../img/icons/cross_white.svg';

const Tag = ({tag, index, onDeleteClick}) => {
  const handleClick = () => {
    onDeleteClick(index);
  }

  return (
    <span>
      {tag}
      <img className="delete" src={deleteIcon} alt="delete" onClick={handleClick}/>
    </span>
  );
};

export default Tag;

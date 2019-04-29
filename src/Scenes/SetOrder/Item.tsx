import * as React from 'react';
import upIcon from '../../img/icons/up.svg';
import downIcon from '../../img/icons/down.svg';
import closeIcon from '../../img/icons/close.svg';

const Item = ({index, item, isEditable, isLast, onItemChange, onDeleteClick, onAddClick}) => {

  const handleDeleteClick = () => {
    onDeleteClick(index);
  }

  const handleAddClick = () => {
    onAddClick();
  }

  const handleInputChange = event => {
    const newItem = item;
    newItem[event.target.name] = event.target.value;
    onItemChange(index, newItem);
  }

  const handleAmountUp = () => {
    if(isEditable) {
    const newItem = item;
    newItem.amount += 1;
    onItemChange(index, newItem);}
  }

  const handleAmountDown = () => {
    if(isEditable) {
    const newItem = item;
    if(newItem.amount > 1) {
      newItem.amount -= 1;
    } else {
      newItem.amount = 1;
    }
    onItemChange(index, newItem);}
  }

  return (
    <div className="orderItem">
      <input name="url" type="text" placeholder="Item Url" value={item.url} disabled={!isEditable} onChange={handleInputChange}/>
      <input name="details" type="text" placeholder="Details" value={item.details} disabled={!isEditable} onChange={handleInputChange}/>

      <input name="amount" type="number" min="1" value={item.amount} disabled={!isEditable} onChange={handleInputChange}/>
      <div className="quantity-nav">
        <img src={upIcon} alt="more" className="quantity-button quantity-up" onClick={handleAmountUp}/>
        <img src={downIcon} alt="less" className="quantity-button quantity-down" onClick={handleAmountDown} />
      </div>
      <img src={closeIcon} alt="delete" className="deleteButton" onClick={handleDeleteClick} />
      {isLast ? <button className="button2 v2" onClick={handleAddClick}>Add</button> : ''}
    </div>
  );
};

export default Item;

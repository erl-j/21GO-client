import * as React from 'react';
import upIcon from '../../img/icons/up.svg';
import downIcon from '../../img/icons/down.svg';
import closeIcon from '../../img/icons/close.svg';

const Item = ({index, item, isLast, onItemChange, onDeleteClick, onAddClick}) => {

    const handleInputChange = event => {
        const newItem = item;
        newItem[event.target.name] = event.target.value;
        onItemChange(index, newItem);
    };

    const handleQuantityUp = () => {
        const newItem = item;
        newItem.quantity += 1;
        onItemChange(index, newItem);
    };

    const handleQuantityDown = () => {
        const newItem = item;
        newItem.quantity = (newItem.quantity > 1) ? (newItem.quantity - 1) : 1;
        onItemChange(index, newItem);
    };

    return (
        <div className="orderItem">
            <input name="url" type="text" placeholder="Item Url" defaultValue={item.url} onBlur={handleInputChange}/>
            <input name="details" type="text" placeholder="Details" defaultValue={item.details} onBlur={handleInputChange}/>
            <div>
              <input name="quantity" type="number" min="1" defaultValue={item.quantity} onBlur={handleInputChange}/>

              <div className="quantity-nav">
                  <img src={upIcon} alt="more" className="quantity-button quantity-up" onClick={handleQuantityUp}/>
                  <img src={downIcon} alt="less" className="quantity-button quantity-down" onClick={handleQuantityDown}/>
              </div>

              <img src={closeIcon} alt="delete" className="deleteButton" onClick={() => onDeleteClick(index)}/>
              {isLast ? <button className="button2 v2" onClick={() => onAddClick()}>Add</button> : ''}
            </div>
        </div>
    );

};

export default Item;

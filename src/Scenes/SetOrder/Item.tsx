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

    const handleAmountUp = () => {
        const newItem = item;
        newItem.amount += 1;
        onItemChange(index, newItem);
    };

    const handleAmountDown = () => {
        const newItem = item;
        newItem.amount = (newItem.amount > 1) ? (newItem.amount - 1) : 1;
        onItemChange(index, newItem);
    };

    return (
        <div className="orderItem">
            <input name="url" type="text" placeholder="Item Url" defaultValue={item.url} onBlur={handleInputChange}/>
            <input name="details" type="text" placeholder="Details" defaultValue={item.details} onBlur={handleInputChange}/>
            <input name="amount" type="number" min="1" defaultValue={item.amount} onBlur={handleInputChange}/>

            <div className="quantity-nav">
                <img src={upIcon} alt="more" className="quantity-button quantity-up" onClick={handleAmountUp}/>
                <img src={downIcon} alt="less" className="quantity-button quantity-down" onClick={handleAmountDown}/>
            </div>

            <img src={closeIcon} alt="delete" className="deleteButton" onClick={() => onDeleteClick(index)}/>
            {isLast ? <button className="button2 v2" onClick={() => onAddClick()}>Add</button> : ''}
        </div>
    );

};

export default Item;

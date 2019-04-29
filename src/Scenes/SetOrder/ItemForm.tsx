import { useState } from 'react';
import * as React from 'react';
import upIcon from '../../img/icons/up.svg';
import downIcon from '../../img/icons/down.svg';
import closeIcon from '../../img/icons/close.svg';
import Item from './Item';


const ItemForm = (props) => {
	// const { id, storeURL, storeLocation, deadline, arrivalLocation, availableDispatch, tags } = props;
  const {itemAttributes, post} = props;

  let urlIn;
  let detailsIn;
  let amountIn;
  if(itemAttributes) {
      ({urlIn,detailsIn,amountIn}=itemAttributes)
  } else {
      urlIn="";
      detailsIn="";
      amountIn=1;
  }

	const [isEditable, setEditable] = useState(true);
  const [url,setUrl] = useState(urlIn);
  const [details,setDetails] = useState(detailsIn);
  const [amount,setAmount] = useState(amountIn);

  interface IOrderItem {
    url: string;
    details: string;
    amount: number;
  };

  const [items, setItems] = useState<IOrderItem[]>([{url: '', details: '', amount: 1}]);

  const handleItemDelete = index => {
    const newItems = Object.assign([], items);
    if (newItems.length === 1) {
      newItems.splice(index, 1, {url: '', details: '', amount: 1});
    } else {
      newItems.splice(index, 1);
    }
    setItems(newItems);
  }

  const handleItemAdd = () => {
    setItems(items.concat({url: '', details: '', amount: 1}));
  }

  const handleItemChange = (index, item) => {
    const newItems = Object.assign([], items);
    newItems.splice(index, 1, item);
    setItems(newItems);
  }

	return (
		<React.Fragment>
            <div className="setOrder-form">
              {items.map((item, index) => (
                <Item index={index} item={item} isEditable={isEditable} isLast={index === items.length - 1} onItemChange={handleItemChange} onDeleteClick={handleItemDelete} onAddClick={handleItemAdd}/>
              )
              )}
              <input name="itemUrl" type="text" placeholder="Item Url" disabled={!isEditable} onChange={e => setUrl(e.target.value)}/>
              <input name="itemDetail" type="text" placeholder="Details" disabled={!isEditable} onChange={e => setDetails(e.target.value)}/>

              <input name="amount" type="number" min="1" value={amount} disabled={!isEditable} onChange={e => setAmount(e.target.value)}/>
              <div className="quantity-nav">
                <img src={upIcon} alt="more" className="quantity-button quantity-up" onClick={() => setAmount(amount + 1)}/>
                <img src={downIcon} alt="less" className="quantity-button quantity-down" onClick={() =>
                  {if(amount > 1) {setAmount(amount - 1);}}} />
              </div>
              <img src={closeIcon} alt="delete" className="deleteButton" />
              <button className="button2 v2">Add</button>
            </div>

			<button className="button2" onClick={() => {
				setEditable(!isEditable)}}>{isEditable ? 'Confirm' : 'Edit'}</button>
			{!isEditable?<button className="button2" onClick={()=>post({url,details,amount})}>Post</button>:""}
			{/* {isLoading?"LOADING":"NOT LOADING"}
			{error?Object.keys(error).map(er=>error[er]):""} */}
		</React.Fragment>
	);
};

export default ItemForm;

import { useState } from 'react';
import * as React from 'react';

const ItemForm = (props) => {
	// const { id, storeURL, storeLocation, deadline, arrivalLocation, availableDispatch, tags } = props;
    const {itemAttributes,post}=props

    let urlIn;
    let detailsIn;
    let amountIn;
    if(itemAttributes){
        ({urlIn,detailsIn,amountIn}=itemAttributes)
    }
    else{
        urlIn="";
        detailsIn="";
        amountIn=1;
    }
	const [isEditable, setEditable] = useState(true);
    const [url,setUrl]=useState(urlIn);
    const [details,setDetails]=useState(detailsIn)
    const [amount,setAmount]=useState(amountIn)
	return (
		<React.Fragment>
            <div className="setOrder-form">
                <input name="itemUrl" type="text" placeholder="Item Url" disabled={!isEditable} onChange={e => setUrl(e.target.value)}/>
                <input name="itemDetail" type="text" placeholder="Details" disabled={!isEditable} onChange={e => setDetails(e.target.value)}/>
                <input name="amount" type="number" min="1" value={amount} disabled={!isEditable} onChange={e => setAmount(e.target.value)}/>
            </div>

			<button className="button2" onClick={() => {
				setEditable(!isEditable)}}>{isEditable ? 'Seal' : 'Edit'}</button>
			{!isEditable?<button className="button2" onClick={()=>post({url,details,amount})}>Post</button>:""}
			{/* {isLoading?"LOADING":"NOT LOADING"}
			{error?Object.keys(error).map(er=>error[er]):""} */}
		</React.Fragment>
	);
};

export default ItemForm;

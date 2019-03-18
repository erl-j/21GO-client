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
            <div>
                url <input disabled={!isEditable} onChange={e => setUrl(e.target.value)}/>
                details <input disabled={!isEditable} onChange={e => setDetails(e.target.value)}/>
                amount <input disabled={!isEditable} onChange={e => setAmount(e.target.value)}/>
            </div>
	
			<button onClick={() => {
				setEditable(!isEditable)}}>{isEditable ? 'Seal' : 'Edit'}</button>
			{!isEditable?<button onClick={()=>post({url,details,amount})}>Post</button>:""}
			{/* {isLoading?"LOADING":"NOT LOADING"}
			{error?Object.keys(error).map(er=>error[er]):""} */}
		</React.Fragment>
	);
};

export default ItemForm;

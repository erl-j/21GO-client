import { useState } from 'react';
import * as React from 'react';
import Loader from '../../Components/Loader';
import closeIcon from '../../img/icons/close.svg';
import Tag from '../../Components/Tag';

const SuperorderEditable = ({attributes,isLoading,error,post}) => {
	// const { id, storeURL, storeLocation, deadline, arrivalLocation, availableDispatch, tags } = props;
	const dispatchModes = ["NEITHER", "PICKUP", "DELIVERY", "BOTH"];

	const [isEditable, setEditable] = useState(true);
	const [params, setParams] = useState(
		attributes
	);
	const [inputTag, setInputTag] = useState('');
  const array: string[] = [];
  const [tags, setTags] = useState(array);
	const [availableDispatch, setAvailableDispatch] = useState(1);
	const [isPickup, setIsPickup] = useState(true);
	const [isDelivery, setIsDelivery] = useState(false);

	const handleCloseClick = event => {
		console.log("Close setSuperorder!");
	}

	const handleInputTagChange = event => {
    setInputTag(event.target.value);
  }

	const handleKeyPress = event => {
		if(event.key === 'Enter') {
			setTags(tags.concat(inputTag));
			setParams({...params, tags: [...tags, inputTag]});
			setInputTag('');
		}
	}

	const handleTagDelete = (index) => {
		const newTags = Object.assign([], tags);
		newTags.splice(index, 1);
		setTags(newTags);
		setParams({...params, tags:[...newTags]});
	}

	const handlePickupChange = event => {
		let currentDispatch = availableDispatch;
		if(isPickup) {
			currentDispatch -= 1;
		} else {
			currentDispatch += 1;
		}
		setIsPickup(!isPickup);
		setParams({...params, availableDispatch: dispatchModes[currentDispatch]});
		setAvailableDispatch(currentDispatch);
	}

	const handleDeliveryChange = event => {
		let currentDispatch = availableDispatch;
		if(isDelivery) {
			currentDispatch -= 2;
		} else {
			currentDispatch += 2;
		}
		setIsDelivery(!isDelivery);
		setParams({...params, availableDispatch: dispatchModes[currentDispatch]});
		setAvailableDispatch(currentDispatch);
	}

	let content;
	if(isLoading) {
		content = <Loader />;
	} else {
		content = <form>
								<fieldset disabled={!isEditable}>
									<div className="setSuperorder-form">
										<div className="box1">
											<input name="storeName" type="text" placeholder="store name" onChange={e => setParams({...params, storeName: e.target.value})} value={params.storeName}/>
											<br />
											<input name="storeLocation" type="text" placeholder="country" onChange={e => setParams({...params, storeLocation: e.target.value})} value={params.storeLocation}/>
											<br />
											<input name="storeURL" type="text" placeholder="store url" onChange={e => setParams({...params, storeURL: e.target.value})} value={params.storeURL}/>
											<br />
											<input name="arrivalLocation" type="text" placeholder="arrival location" onChange={e => setParams({...params, arrivalLocation: e.target.value})} value={params.arrivalLocation} />
											<br />
											<h3>Dispatch Method</h3>
											<label className="checkbox-container">
												<span>Pick up</span>
											  <input name="pickup" type="checkbox" checked={isPickup} onChange={handlePickupChange} />
											  <span className="checkmark" />
											</label>
											<label className="checkbox-container">
												<span>Delivery</span>
											  <input name="delivery" type="checkbox" checked={isDelivery} onChange={handleDeliveryChange} />
											  <span className="checkmark" />
											</label>
											{/*<input name="availableDispatch" type="text" placeholder="dispatch mode" onChange={e => setParams({...params, availableDispatch: e.target.value})} value={params.availableDispatch} />
											<br />*/}
										</div>
										<div className="box2">
											<h3>Deadline</h3>
											<input name="deadline" type="date" onChange={e => setParams({...params, deadline: e.target.value})} value={params.deadline} />
											<br />
											<h3>Tags</h3>
											<div className="tags_master">
								        <div className="tags clearfix">
								          {tags.map((tag, index) => <Tag key={index} tag={tag} index={index} onDeleteClick={handleTagDelete}/>)}
								        </div>
								        <div className="tags_input">
								          <input type="text" value={inputTag} onChange={handleInputTagChange} onKeyPress={handleKeyPress} autoFocus={true} placeholder="add..." />
								        </div>
								      </div>

										</div>
									</div>
								</fieldset>
							</form>;
	}
	return (
		<React.Fragment>
			<div className="setSuperorder">
				<div className="setSuperorder-content">
					<img className="close" src={closeIcon} alt="Close" onClick={handleCloseClick}/>
					{content}
					{error?Object.keys(error).map(er=>(<h3 className="error">error[er]</h3>)):""}
					<button className="button2" onClick={() => {
						setEditable(!isEditable)}}>{isEditable ? 'Confirm' : 'Edit'}</button>
					{!isEditable?<button className="button2" onClick={()=>post(params)}>Post</button>:""}
				</div>
			</div>
		</React.Fragment>
	);
};

export default SuperorderEditable;

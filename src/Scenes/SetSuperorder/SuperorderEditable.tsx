import {useState} from 'react';
import * as React from 'react';
import Loader from '../../Components/Loader';
import closeIcon from '../../img/icons/close.svg';
import Tag from '../../Components/Tag';
import ImageSelector from "../../Components/ImageSelector";

enum DispatchMode {NEITHER = "NEITHER", PICKUP = "PICKUP", DELIVERY = "DELIVERY", BOTH = "BOTH"}

const SuperorderEditable = ({id, attributes, isLoading, error, post, goBack}) => {

    const [params, setParams] = useState(attributes);
    const [inputTag, setInputTag] = useState<string>('');
    const [tags, setTags] = useState<string[]>([]);
    const [checked, setChecked] = useState([true, false]);

    const handleInputTagChange = event => {
        setInputTag(event.target.value);
    };

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            setTags(tags.concat(inputTag));
            setParams({...params, tags: [...tags, inputTag]});
            setInputTag('');
        }
    };

    const handleTagDelete = (index) => {
        const newTags = Object.assign([], tags);
        newTags.splice(index, 1);
        setTags(newTags);
        setParams({...params, tags: [...newTags]});
    };

    const handleCheckChange = (e) => {
        const newChecked = e.target.value === "pickup" ? [!checked[0], checked[1]] : [checked[0], !checked[1]];
        setChecked(newChecked);
        const dispatch = newChecked[0]
            ? (newChecked[1] ? DispatchMode.BOTH : DispatchMode.PICKUP)
            : (newChecked[1] ? DispatchMode.DELIVERY : DispatchMode.NEITHER);
        setParams({...params, availableDispatch: dispatch.toString()});
        console.log(newChecked);
        console.log(dispatch);
    };


    let content;

    if(id){
        content = (<div>
                    <p>SuperOrder Successfully created, click on the button below to see it!</p>
                    <a href={"/setOrder/" + id} className="button2">Click me!</a>
                </div>);
    }
    else if (isLoading) {
        content = <Loader/>;
    } else {
        content = <form>
            <div className="setSuperorder-form">
                <div className="box1">
                    <input name="storeName" type="text" placeholder="store name" value={params.storeName}
                           onChange={e => setParams({...params, storeName: e.target.value})}/>
                    <br/>
                    <input name="storeLocation" type="text" placeholder="country" value={params.storeLocation}
                           onChange={e => setParams({...params, storeLocation: e.target.value})}/>
                    <br/>
                    <input name="storeURL" type="text" placeholder="store url" value={params.storeURL}
                           onChange={e => setParams({...params, storeURL: e.target.value})}/>
                    <br/>
                    <input name="arrivalLocation" type="text" placeholder="arrival location"
                           value={params.arrivalLocation}
                           onChange={e => setParams({...params, arrivalLocation: e.target.value})}/>
                    <br/>

                    <h3>Dispatch Method</h3>

                    <label className="checkbox-container">
                        <span>Pick up</span>
                        <input name="dispatchMode" value="pickup" type="checkbox"
                               checked={checked[0]} onChange={handleCheckChange}/>
                        <span className="checkmark"/>
                    </label>
                    <label className="checkbox-container">
                        <span>Delivery</span>
                        <input name="dispatchMode" value="delivery" type="checkbox"
                               checked={checked[1]} onChange={handleCheckChange}/>
                        <span className="checkmark"/>
                    </label>
                </div>

                <div className="box2">
                    <h3>Deadline</h3>
                    <input name="deadline" type="date" value={params.deadline}
                           onChange={e => setParams({...params, deadline: e.target.value})}/>
                    <br/>
                    <h3>Tags</h3>

                    <div className="tags_master">

                        <div className="tags clearfix">
                            {tags.map((tag, index) =>
                                <Tag key={index} tag={tag} index={index} onDeleteClick={handleTagDelete}/>)}
                        </div>

                        <div className="tags_input">
                            <input type="text" value={inputTag} onChange={handleInputTagChange}
                                   onKeyPress={handleKeyPress} autoFocus={true} placeholder="add..."/>
                        </div>

                    </div>
                </div>

            </div>

            <ImageSelector submitButton={
                                (handler) => <button className="button2" onClick={() => post(params, handler)
                                        }>Submit</button>}/>

        </form>;
    }

    const errors: JSX.Element[] = [];

    if(error){
        for (const el of error.details.error) {
            const key = el.property;
            const msg = Object.keys(el.constraints).reduce((previous, keyy) => {
                return previous + (previous !== "" ? ", " : "") + el.constraints[keyy];
            }, "");

            errors.push(<p key={key}>{key + ": " + msg + "\n"}</p>);
        }
    }

    console.log(error);

    return (
        <React.Fragment>
            <div className="grey-overlay">
                <div className="setSuperorder">
                    <img className="close" src={closeIcon} alt="Close" onClick={goBack}/>
                    {content}
                    {errors}
                </div>
            </div>
        </React.Fragment>
    );
};

export default SuperorderEditable;

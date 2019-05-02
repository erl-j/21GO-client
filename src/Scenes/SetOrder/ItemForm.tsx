import {useState} from 'react';
import * as React from 'react';
import Item from './Item';


const ItemForm = (props) => {
    const {post, availableDispatch} = props;

    interface IOrderItem {
        url: string;
        details: string;
        quantity: number;
    }

    const [items, setItems] = useState<IOrderItem[]>([{url: '', details: '', quantity: 1}]);
    const [dispatch, setDispatch] = useState(availableDispatch === "BOTH" ? "PICKUP" : availableDispatch);

    const handleItemDelete = index => {
        const newItems = Object.assign([], items);
        if (newItems.length === 1) {
            newItems.splice(index, 1, {url: '', details: '', quantity: 1});
        } else {
            newItems.splice(index, 1);
        }
        setItems(newItems);
        console.log(items);
    };

    const handleItemAdd = () => {
        setItems(items.concat({url: '', details: '', quantity: 1}));
        console.log(items);

    };

    const handleItemChange = (index, item) => {
        const newItems = Object.assign([], items);
        newItems.splice(index, 1, item);
        setItems(newItems);
        console.log(items);

    };

    const btns = availableDispatch === "BOTH" ? (<div>
            <button className="button2 v3" onClick={() => {setDispatch("DISPATCH")}}>DISPATCH</button>
            <button className="button2 v3" onClick={() => {setDispatch("PICKUP")}}>PICKUP</button>
    </div>
    ) : "";

    return (
        <React.Fragment>
            <div className="setOrder-form">
                <p>Dispatch Mode: {dispatch} </p>

                {btns}

                {items.map((item, index) => (
                        <Item key={index} index={index} item={item} isLast={index === items.length - 1}
                              onItemChange={handleItemChange}
                              onDeleteClick={handleItemDelete}
                              onAddClick={handleItemAdd}/>
                    )
                )}
            </div>

            <button className="button2" onClick={() => {

                let valid = true;
                items.forEach((el) => {
                    if(el.url === ""){
                        valid = false;
                    }
                });

                if(!valid){
                    alert("All item urls must be set");
                }
                else{
                    post({items, dispatch});
                }
            }

            }>Create Order</button>

        </React.Fragment>
    );
};

export default ItemForm;

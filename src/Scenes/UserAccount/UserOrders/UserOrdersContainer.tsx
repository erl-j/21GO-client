import * as React from 'react';

class UserOrdersContainer extends React.Component {

	public onDragStart(event,name){
		console.log("dragstart: ",name);
		event.dataTransfer.setData("name:",name);


	}

	public render() {
		const divStyle = {
			border: '5px solid pink',
			background: 'grey',
		};

		return (
			<div style={divStyle}  draggable={true} onDragStart={(e)=>this.onDragStart(e,"myorder")}>
				Here are my orders
			</div>
		);
	}
}

export default UserOrdersContainer;

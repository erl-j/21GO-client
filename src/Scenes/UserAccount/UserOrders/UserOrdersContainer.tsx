import * as React from 'react';

class UserOrdersContainer extends React.Component {
	public render() {
		const divStyle = {
			margin: '40px',
			border: '5px solid pink',
			background: 'grey',
		};

		const onDragStart = (event, id) => {
			event.dataTransfer.setData(event, id);
		};

		let confirmDelete = <div />;

		const onDragOver = event => {
			event.preventDefault();
			
		};

		const onDrop = event => {
			confirmDelete = <div>are you sure you want to delete this order?</div>;
			console.log('drop');
		};

		return (
			<div>
				<div style={divStyle} draggable={true} onDragStart={event => onDragStart(event, event.target)}>
					<h1>Here are my orders</h1>
				</div>

				<div onDragOver={event => onDragOver(event)} onDrop={(e)=>onDrop(e)}>Garbage Can</div>
				{confirmDelete}
				
			</div>
		);
	}
}

export default UserOrdersContainer;

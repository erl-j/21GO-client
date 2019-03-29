import * as React from 'react';

class UserOrdersContainer extends React.Component {

    

	public render() {
        const divStyle = {
            margin: '40px',
            border: '5px solid pink',
            background:"grey"
          };

		return (
			<div  style={divStyle} draggable={true}>
				<h1>Here are my orders</h1>
			</div>
		);
	}
}

export default UserOrdersContainer;

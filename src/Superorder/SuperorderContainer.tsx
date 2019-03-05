import * as React from 'react';

class SuperorderContainer extends React.Component<{ render: any }, {}> {
	constructor(props) {
		super(props);
		this.state = { storeName: 'the test store' };
	}

	public render() {
		return <React.Fragment>{this.props.render(this.state)}</React.Fragment>;
	}
}

export default SuperorderContainer;

import * as React from 'react';


// This container might be 100% useless.

interface ISuperorderContainerProps {
	id:string;
	storeURL: string;
	storeLocation: string;
	deadline: string;
	arrivalLocation: string;
	availableDispatch: string;
	tags: string[];
	render: any;
}

class SuperorderContainer extends React.Component<ISuperorderContainerProps, {}> {
	constructor(props) {
		super(props);
	}

	public render() {
		const { id,storeURL, storeLocation, deadline, arrivalLocation, availableDispatch, tags } = this.props;
		const viewProps = { id,storeURL, storeLocation, deadline, arrivalLocation, availableDispatch, tags };
		return <React.Fragment>{this.props.render(viewProps)}</React.Fragment>;
	}
}

export default SuperorderContainer;

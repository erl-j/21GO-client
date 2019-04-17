import * as React from 'react';
import { connect } from 'react-redux';
import UserSuperorders from "./UserSuperorders" ;

interface IUserSuperordersContainerProps {
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

class UserSuperordersContainer extends React.Component<IUserSuperordersContainerProps> {
    
    public componentDidMount(){
    }
	public render() {
		return (
			<UserSuperorders superOrder={null} />
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserSuperordersContainer);

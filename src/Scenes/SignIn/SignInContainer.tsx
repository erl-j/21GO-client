import * as actions from "./SignInActions";
import * as React from "react";
import { connect } from 'react-redux'
import SignIn from "./SignIn";


interface ISignInContainerProps{
    onSignInPressed:any;
    isSignInLoading: boolean;
}

const mapDispatchToProps=(dispatch: any) =>(
    {
        onSignInPressed:(username:string,password:string)=>dispatch(actions.fetchJwt(username,password))
    }
)

const mapStateToProps=(state:any)=>({isSignInLoading:state.signIn.loading});

class SignInContainer extends React.Component<ISignInContainerProps>{

    public render(){
        return <SignIn onSignInPressed={this.props.onSignInPressed} isSignInLoading={this.props.isSignInLoading}/>;
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignInContainer)



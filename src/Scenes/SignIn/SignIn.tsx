import * as React from 'react';
import { useState } from 'react';

const SignIn=({onSignInPressed,isSignInLoading})=>{

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    return (
    <div>
        <button onClick={()=>onSignInPressed(username,password)}>Sign in</button>
		<input name="username" onChange={(e)=>setUsername(e.target.value)}/>
        <input name="password" onChange={(e)=>setPassword(e.target.value)}/>
        <h3>{isSignInLoading?"LOADING":"NOT LOADING"}</h3>
    </div>
    );
}

export default SignIn;


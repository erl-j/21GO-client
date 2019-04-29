import {APICall, Method} from "../apiCall";

export default function loadJwt() {
    if(localStorage.getItem("user") == null){
        return null;
    }
    const user = JSON.parse(localStorage.getItem("user")!);
    return (user && user.token) ? user.token : null;
}

export function loadUsername() {
    if(localStorage.getItem("user") == null){
        return null;
    }
    const user = JSON.parse(localStorage.getItem("user")!);
    return (user && user.username) ? user.username : null;
}


export function clearJwt(){
    localStorage.removeItem("user");
}

export async function loadUser(){
    try{
        const body = await APICall(Method.GET, "/user/profile", null, loadJwt());
        return body.profile;
    }
    catch(err){
        clearJwt();
        return null;
    }
}

export async function isLoggedIn(){
    return await loadUser() != null;
}

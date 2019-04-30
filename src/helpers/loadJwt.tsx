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


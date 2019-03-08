

export default function loadJwt() {
    // return authorization header with jwt token
    const user = JSON.parse(localStorage.getItem("user")||"");
    if (user && user.token) {
        return user.token;
    } else {
        return "";
    }
}
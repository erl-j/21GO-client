import {BASE_URL} from "./constants";

export enum Method {GET = "GET", POST = "POST", PUT = "PUT", DELETE = "DELETE"}

export function APICall(method: Method, URI, body?, jwt?) {

    const options: RequestInit = {
        method: method.toString(),
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client,
    };

    const authorization = "Authorization";
    if(jwt != null){
        options.headers![authorization] = jwt;
    }

    console.log(options);
    if(body != null){
        options.body! = JSON.stringify(body);
    }

    return fetch(BASE_URL + URI, options)
        .then(handleErrors)
        .then(res => res.json());

}

// Handle HTTP errors since fetch won't.
async function handleErrors(response: any) {
    if (!response.ok) {
        console.log(response);
        const error = Error(response.statusText);
        const details = "details";
        const status = "status";
        error[status] = response.status;
        const body = await response.text();
        error[details] = body ? JSON.parse(body) : {};
        throw error;
    }

    return response;
}



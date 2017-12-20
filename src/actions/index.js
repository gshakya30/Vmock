import axios from 'axios';

const ROOT_URL = `https://api.github.com/search/users`;
//create action creator

export const FETCH_USERLIST= 'FETCH_USERLIST';

export function fetchUserList(name) {
    const url = `${ROOT_URL}?q=${name}`;
    const request = axios.get(url);
    return {
        type: FETCH_USERLIST,
        payload : request
    };
}
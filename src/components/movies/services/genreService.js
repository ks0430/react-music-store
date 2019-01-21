import http from './httpService';
import {apiUrl} from '../config.json'

console.log("4",apiUrl);

export function getGenres() {
    return  http.get(`${apiUrl}/genres`);
}


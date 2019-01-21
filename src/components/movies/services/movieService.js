import http from './httpService';
import {apiUrl} from '../config.json'

const movieUrl = `${apiUrl}/movies`;

export function getMovie(movieId) {
    return http.get(`${movieUrl}/${movieId}`);
}

export function saveMovie(movie) {
    console.log(movie);
    let movieObj = {...movie};
    console.log("14", movieObj);
    delete movieObj._id;
    return http.put(apiUrl + '/movies/' + movie._id, movieObj);
}

export function getMovies() {
    return http.get(apiUrl + '/movies');
}

export function deleteMovie(movieId) {
    return http.delete(apiUrl + '/movies/' + movieId);
}
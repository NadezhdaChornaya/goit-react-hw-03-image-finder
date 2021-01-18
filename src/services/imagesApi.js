import axios from 'axios';

const URL = `https://pixabay.com/api/`
// const URL = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12`
const API_KEY = "19534970-c150d60c17d66f9c0c2e6c44f";

const fetchImagessWithQuery = (searchQuery, page) => {
    return axios
        .get(`${URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.data.hits);
};

export default {
    fetchImagessWithQuery,
};

// const fetchImages = (query, page, API_KEY) => {
//     const URL = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12`
//     return fetch(URL).then(response => {
//         if (response.status === 200) {
//             return response.json();
//         }
//     }).then(data => {
//         return data.hits;
//     })

// }
import axios from 'axios';

const URL = `https://pixabay.com/api/`
const API_KEY = "19534970-c150d60c17d66f9c0c2e6c44f";

export const fetchImagessWithQuery = (searchQuery, page = 1) => {
    return axios.get(`${URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.data.hits);
};



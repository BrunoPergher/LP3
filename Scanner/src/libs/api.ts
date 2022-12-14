import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.linkpreview.net/',
});

export default api;
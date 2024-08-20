import axios from 'axios';
export const api_key = '42df068983c1221d59c1063edb39e246';

export const api =axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})

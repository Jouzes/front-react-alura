import axios from 'axios';

const filmesAPI = axios.create({baseURL: 'http://localhost:8000'});

export async function getFilmes() {
    const response = await filmesAPI.get('/filmes');
    return response.data;
};
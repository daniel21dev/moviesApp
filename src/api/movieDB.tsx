import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '76dc87f899a2eacc6eab791e48c7eab8',
    language: 'es-ES',
  },
});

export default movieDB;

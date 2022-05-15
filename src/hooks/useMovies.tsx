import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying, Movie} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setisLoading] = useState(true);
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>();

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    const peliculas = resp.data.results;
    setPeliculasEnCine(peliculas);
    setisLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    peliculasEnCine,
    isLoading,
  };
};

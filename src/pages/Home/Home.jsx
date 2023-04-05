import { useEffect, useState } from 'react';
import { BASE_URL, API_KEY } from '@/config';
import { Trending } from '@components';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const API_MOVIES = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  const API_SERIES = `${BASE_URL}/trending/tv/day?api_key=${API_KEY}`;

  const getData = async (API, setState) => {
    const response = await fetch(API);
    const data = await response.json();

    console.log(data.results);
    setState(data.results);
  };

  useEffect(() => {
    getData(API_MOVIES, setMovies);
    getData(API_SERIES, setSeries);
  }, []);

  return (
    <>
      <Trending media={movies} />
      <Trending media={series} />
    </>
  );
};

export default Home;

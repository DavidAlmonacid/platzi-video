import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const baseImageURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
  const baseURL = 'https://api.themoviedb.org/3';
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API = `${baseURL}/trending/all/day?api_key=${API_KEY}`;

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(API);
      const data = await response.json();

      console.log(data);

      setMovies(data.results);
    };

    getData();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title || movie.name}</h1>
          <img src={baseImageURL + movie.poster_path} alt={movie.name} />
        </div>
      ))}
    </div>
  );
};

export default Home;

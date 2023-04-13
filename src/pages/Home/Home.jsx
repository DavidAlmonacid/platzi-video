import { useContext, useEffect, useState } from 'react';
import { MyListContext } from '@context';
import { MediaList } from '@components';
import { API_KEY, BASE_URL } from '@/config';

const Home = () => {
  const { myList } = useContext(MyListContext);

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [collection, setCollection] = useState([]);

  const API_MOVIES = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  const API_SERIES = `${BASE_URL}/trending/tv/day?api_key=${API_KEY}`;
  const API_COLLECTION = `${BASE_URL}/collection/645?api_key=${API_KEY}`;

  const getData = async (API, setState) => {
    const response = await fetch(API);
    const data = await response.json();

    if (data.parts) {
      data.parts.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
    }

    const newData = structuredClone(data.results ?? data.parts);

    if (myList.length > 0) {
      newData.forEach((item) => {
        myList.forEach((item2) => {
          if (item.id === item2.id) {
            item.is_added = true;
          }
        });
      });
    }

    setState(newData);
  };

  useEffect(() => {
    getData(API_MOVIES, setMovies);
    getData(API_SERIES, setSeries);
    getData(API_COLLECTION, setCollection);
  }, [myList]);

  return (
    <>
      {myList.length > 0 && <MediaList name='Mi lista' media={myList} />}
      <MediaList name='Películas en tendencia' media={movies} />
      <MediaList name='Series en tendencia' media={series} />
      <MediaList name='Saga de James Bond' media={collection} />
    </>
  );
};

export default Home;

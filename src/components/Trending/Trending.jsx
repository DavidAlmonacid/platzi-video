import { BASE_IMAGE_URL } from '@/config';

const Trending = ({ media }) => {
  return (
    <div>
      {media.map((item) => (
        <article key={item.id}>
          <h1>{item.title || item.name}</h1>
          <img
            src={BASE_IMAGE_URL + item.poster_path}
            alt={item.title || item.name}
            width={200}
          />
        </article>
      ))}
    </div>
  );
};

export default Trending;

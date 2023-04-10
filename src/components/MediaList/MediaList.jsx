import { BASE_IMAGE_URL } from '@/config';
import './MediaList.css';

const MediaList = ({ media, name }) => {
  return (
    <div className='media-list'>
      <h2 className='media-list__title'>{name}</h2>

      <div className='media-list__collection'>
        {media.map((item) => (
          <article key={item.id} className='media-list__item'>
            <picture className='media-list__image-wrapper'>
              <img
                src={BASE_IMAGE_URL + item.poster_path}
                alt={item.title || item.name}
                width={200}
                className='media-list__image'
              />
            </picture>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MediaList;

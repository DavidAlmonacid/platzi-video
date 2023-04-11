import { Card } from '@components';
import './MediaList.css';

const MediaList = ({ media, name }) => {
  return (
    <div className='media-list'>
      <h2 className='media-list__title'>{name}</h2>

      <div className='media-list__collection'>
        {media.map((item) => (
          <Card key={item.id} card={item} />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
